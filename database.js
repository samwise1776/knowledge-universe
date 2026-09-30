(() => {
    const nav =
        document.querySelector("nav");

    const main =
        document.querySelector("main");

    if (!nav || !main) {
        console.error(
            "Database UI could not connect to site."
        );

        return;
    }

    const tab =
        document.createElement("span");

    tab.className = "feed-tab";
    tab.textContent = "Database";

    Object.assign(
        tab.style,
        {
            color: "#888",
            cursor: "pointer",
            whiteSpace: "nowrap",
            fontWeight: "600",
            padding: "17px 0",
            borderBottom:
                "2px solid transparent",
            userSelect: "none"
        }
    );

    async function showDatabase() {
        document
            .querySelectorAll(".feed-tab")
            .forEach(x => {
                x.style.color = "#888";
                x.style.borderBottom =
                    "2px solid transparent";
            });

        tab.style.color = "#fff";

        tab.style.borderBottom =
            "2px solid #fff";

        main.innerHTML = `
            <div style="
                max-width:900px;
                margin:auto;
                padding:30px;
            ">
                <h1>Database</h1>

                <p>
                    Loading database information...
                </p>
            </div>
        `;

        try {
            const response =
                await fetch(
                    "./db-manifest.json?" +
                    Date.now()
                );

            if (!response.ok) {
                throw new Error(
                    "Manifest HTTP " +
                    response.status
                );
            }

            const db =
                await response.json();

            main.innerHTML = `
                <div style="
                    max-width:900px;
                    margin:auto;
                    padding:30px;
                    overflow:auto;
                    height:100%;
                ">
                    <h1>Knowledge Database</h1>

                    <div style="
                        background:#181818;
                        border:1px solid #292929;
                        padding:25px;
                        border-radius:14px;
                    ">
                        <h2>
                            ${db.name}
                        </h2>

                        <p>
                            <strong>
                                ${Number(
                                    db.items
                                ).toLocaleString()}
                            </strong>
                            database entries
                        </p>

                        <p>
                            ${db.sections_per_item}
                            detailed sections per entry
                        </p>

                        <p>
                            SQLite database
                        </p>

                        <a
                            href="${db.download}"
                            style="
                                display:inline-block;
                                margin-top:15px;
                                padding:12px 18px;
                                background:#eee;
                                color:#111;
                                text-decoration:none;
                                border-radius:9px;
                                font-weight:bold;
                            "
                        >
                            Download knowledge.db
                        </a>

                        <p style="
                            color:#777;
                            margin-top:20px;
                        ">
                            Release:
                            ${db.release}
                        </p>
                    </div>

                    <h2>Tables</h2>

                    <pre style="
                        padding:20px;
                        background:#080808;
                        border-radius:10px;
                        overflow:auto;
                    ">meta
items
posts</pre>

                    <h2>Example SQLite</h2>

                    <pre style="
                        padding:20px;
                        background:#080808;
                        border-radius:10px;
                        overflow:auto;
                    ">sqlite3 knowledge.db

SELECT COUNT(*) FROM items;

SELECT *
FROM items
WHERE feed = 'Programming'
LIMIT 10;</pre>
                </div>
            `;
        } catch (error) {
            main.innerHTML = `
                <div style="
                    max-width:900px;
                    margin:auto;
                    padding:30px;
                ">
                    <h1>Database</h1>

                    <p>
                        The site is working, but the
                        database manifest could not be
                        loaded.
                    </p>

                    <pre>${String(error)}</pre>
                </div>
            `;
        }
    }

    tab.onclick = showDatabase;

    nav.appendChild(tab);
})();
