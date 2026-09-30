"use strict";

const ITEMS_PER_FEED = 100000;
const ARTICLES_PER_LOAD = 2;
const SECTIONS_PER_ARTICLE = 100;

const feeds = [
    "All",
    "Posted",
    "Programming",
    "Biology",
    "Courses",
    "Pages",
    "Media",
    "Shows"
];

const realFeeds = [
    "Programming",
    "Biology",
    "Courses",
    "Pages",
    "Media",
    "Shows"
];

const languages = [
    "Perl",
    "JavaScript",
    "Python",
    "Java",
    "C",
    "C++",
    "C#",
    "Rust",
    "Go",
    "Lua",
    "Ruby",
    "PHP",
    "Swift",
    "Kotlin",
    "Fortran",
    "COBOL",
    "Assembly",
    "Bash",
    "TypeScript",
    "R",
    "Dart",
    "Scala",
    "Haskell",
    "Elixir",
    "Erlang"
];

const programmingTopics = [
    "Variables",
    "Functions",
    "Loops",
    "Conditions",
    "Arrays",
    "Strings",
    "Files",
    "Networking",
    "Sockets",
    "Databases",
    "Algorithms",
    "Data Structures",
    "Processes",
    "Threads",
    "Memory",
    "Compilers",
    "Interpreters",
    "Parsers",
    "GUIs",
    "APIs",
    "Automation",
    "Testing",
    "Debugging",
    "Packages",
    "Graphics",
    "Operating Systems"
];

const biologyTopics = [
    "Cells",
    "DNA",
    "RNA",
    "Genetics",
    "Evolution",
    "Proteins",
    "Enzymes",
    "Bacteria",
    "Viruses",
    "Plants",
    "Animals",
    "Ecology",
    "Microbiology",
    "Botany",
    "Zoology",
    "Anatomy",
    "Physiology",
    "Neuroscience",
    "Immunology",
    "Biochemistry",
    "Mitosis",
    "Meiosis",
    "Photosynthesis",
    "Respiration",
    "Natural Selection"
];

const levels = [
    "Introduction",
    "Beginner",
    "Intermediate",
    "Advanced",
    "Deep Dive",
    "Reference",
    "Guide",
    "Examples",
    "Projects",
    "Research"
];

const mediaTypes = [
    "Video",
    "Podcast",
    "Diagram",
    "Animation",
    "Lecture",
    "Demo",
    "Interview",
    "Presentation",
    "Documentary",
    "Workshop"
];

const shows = [
    "Programming Weekly",
    "Science Today",
    "Linux World",
    "Biology Lab",
    "Coding Live",
    "Technology Report",
    "Software Workshop",
    "Research Talk",
    "Systems Inside",
    "Future Computing"
];

function esc(text) {
    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

function choose(list, i, divisor = 1) {
    return list[
        Math.floor(i / divisor) % list.length
    ];
}

function programmingExample(language, topic) {
    switch (language) {
        case "Perl":
            return `use v5.40;

my $topic = "${topic}";
say "Learning $topic";`;

        case "JavaScript":
            return `const topic = "${topic}";
console.log("Learning", topic);`;

        case "Python":
            return `topic = "${topic}"
print("Learning", topic)`;

        case "Java":
            return `public class Main {
    public static void main(String[] args) {
        String topic = "${topic}";
        System.out.println("Learning " + topic);
    }
}`;

        case "C":
            return `#include <stdio.h>

int main(void) {
    printf("Learning ${topic}\\n");
    return 0;
}`;

        case "C++":
            return `#include <iostream>

int main() {
    std::cout << "Learning ${topic}\\n";
}`;

        case "Rust":
            return `fn main() {
    println!("Learning ${topic}");
}`;

        case "Go":
            return `package main

import "fmt"

func main() {
    fmt.Println("Learning ${topic}")
}`;

        case "Lua":
            return `local topic = "${topic}"
print("Learning " .. topic)`;

        case "Bash":
            return `#!/bin/bash

topic="${topic}"
echo "Learning $topic"`;

        default:
            return `// ${language}
// Topic: ${topic}

// Create an example here.`;
    }
}


/* =========================================================
   ITEM METADATA
   ========================================================= */

function itemMeta(feed, i) {
    const number = i + 1;

    if (feed === "Programming") {
        const language = choose(
            languages,
            i
        );

        const topic = choose(
            programmingTopics,
            i,
            languages.length
        );

        const level = choose(
            levels,
            i,
            languages.length *
            programmingTopics.length
        );

        return {
            feed,
            number,
            title:
                `${language}: ${level} ${topic}`,
            subject: topic,
            kind: language,
            level
        };
    }

    if (feed === "Biology") {
        const topic = choose(
            biologyTopics,
            i
        );

        const level = choose(
            levels,
            i,
            biologyTopics.length
        );

        return {
            feed,
            number,
            title:
                `${level}: ${topic}`,
            subject: topic,
            kind: "Biology",
            level
        };
    }

    if (feed === "Courses") {
        const subjects = [
            ...languages,
            ...biologyTopics,
            "Linux",
            "Networking",
            "Databases",
            "Operating Systems",
            "Algorithms",
            "Web Development",
            "Game Development"
        ];

        const subject = choose(
            subjects,
            i
        );

        const level = choose(
            levels,
            i,
            subjects.length
        );

        return {
            feed,
            number,
            title:
                `${subject} ${level} Course`,
            subject,
            kind: "Course",
            level
        };
    }

    if (feed === "Pages") {
        const subjects = [
            ...programmingTopics,
            ...biologyTopics,
            "Linux",
            "Networking",
            "Databases",
            "Software Design",
            "Computer Hardware"
        ];

        const types = [
            "Guide",
            "Reference",
            "Documentation",
            "Article",
            "Wiki",
            "Tutorial",
            "Handbook",
            "FAQ",
            "Manual"
        ];

        const subject = choose(
            subjects,
            i
        );

        const type = choose(
            types,
            i,
            subjects.length
        );

        return {
            feed,
            number,
            title:
                `${subject} ${type}`,
            subject,
            kind: type,
            level: "Reference"
        };
    }

    if (feed === "Media") {
        const subjects = [
            ...languages,
            ...biologyTopics,
            "Linux",
            "Operating Systems",
            "Networking",
            "Algorithms"
        ];

        const subject = choose(
            subjects,
            i
        );

        const type = choose(
            mediaTypes,
            i,
            subjects.length
        );

        return {
            feed,
            number,
            title:
                `${subject} ${type}`,
            subject,
            kind: type,
            level: "Media"
        };
    }

    const showName = choose(
        shows,
        i
    );

    const episode =
        Math.floor(
            i / shows.length
        ) + 1;

    return {
        feed: "Shows",
        number,
        title:
            `${showName} — Episode ${episode}`,
        subject: showName,
        kind: "Episode",
        level:
            `Episode ${episode}`
    };
}


/* =========================================================
   100 DETAILED SECTIONS
   ========================================================= */

function sectionText(meta, n) {
    const subject = meta.subject;
    const feed = meta.feed;

    const modes = [
        "Overview",
        "Background",
        "Terminology",
        "Core ideas",
        "Structure",
        "Behavior",
        "Inputs",
        "Outputs",
        "Examples",
        "Applications",
        "Design",
        "Implementation",
        "Architecture",
        "Relationships",
        "Dependencies",
        "Errors",
        "Edge cases",
        "Debugging",
        "Testing",
        "Performance"
    ];

    const mode =
        modes[
            (n - 1) %
            modes.length
        ];

    if (feed === "Programming") {
        return `
            <section>
                <h3>${n}. ${mode}</h3>

                <p>
                    This section examines
                    <strong>${subject}</strong>
                    in ${meta.kind}.
                    The goal is to understand both
                    the syntax and the behavior behind it.
                </p>

                <p>
                    Study how ${subject.toLowerCase()}
                    interacts with program state,
                    functions, data, errors,
                    performance, and surrounding code.
                    A useful approach is to build a small
                    example, change one part, and observe
                    exactly what changes.
                </p>

                <p>
                    For ${mode.toLowerCase()},
                    consider normal cases,
                    invalid input, boundaries,
                    maintainability, and how this feature
                    behaves inside a larger application.
                </p>
            </section>
        `;
    }

    if (feed === "Biology") {
        return `
            <section>
                <h3>${n}. ${mode}</h3>

                <p>
                    This section studies
                    <strong>${subject}</strong>
                    from a biological perspective.
                </p>

                <p>
                    Connect the topic across molecular,
                    cellular, organismal, and environmental
                    levels. Identify structures,
                    mechanisms, causes, effects,
                    variation, and interactions.
                </p>

                <p>
                    For ${mode.toLowerCase()},
                    distinguish observation from
                    interpretation and consider what
                    experiments or measurements could
                    support the explanation.
                </p>
            </section>
        `;
    }

    if (feed === "Courses") {
        return `
            <section>
                <h3>
                    ${n}. Lesson ${n}: ${mode}
                </h3>

                <p>
                    This lesson develops another part of
                    <strong>${subject}</strong>.
                </p>

                <p>
                    Learn the concept, examine an example,
                    modify the example, intentionally
                    create an error, debug it, and then
                    apply the idea to a small project.
                </p>

                <p>
                    By the end of this lesson you should
                    be able to explain the concept,
                    demonstrate it, test it, and identify
                    at least one limitation.
                </p>
            </section>
        `;
    }

    if (feed === "Pages") {
        return `
            <section>
                <h3>${n}. ${mode}</h3>

                <p>
                    Reference material for
                    <strong>${subject}</strong>.
                </p>

                <p>
                    This section covers definitions,
                    relationships, practical examples,
                    common questions, limitations,
                    edge cases, and related concepts.
                </p>

                <p>
                    The ${mode.toLowerCase()} section is
                    designed to provide enough context
                    to connect this topic with larger
                    systems and related subjects.
                </p>
            </section>
        `;
    }

    if (feed === "Media") {
        return `
            <section>
                <h3>${n}. ${mode}</h3>

                <p>
                    This ${meta.kind.toLowerCase()}
                    segment explores
                    <strong>${subject}</strong>.
                </p>

                <p>
                    It combines explanation,
                    demonstration, comparison,
                    examples, and analysis.
                    Important assumptions and
                    limitations are made explicit.
                </p>

                <p>
                    For ${mode.toLowerCase()},
                    consider how visual, audio,
                    textual, or interactive material
                    can make the concept easier
                    to understand accurately.
                </p>
            </section>
        `;
    }

    return `
        <section>
            <h3>${n}. ${mode}</h3>

            <p>
                This segment of
                <strong>${subject}</strong>
                develops the episode's main theme.
            </p>

            <p>
                It includes explanation,
                examples, investigation,
                comparisons, experiments,
                and practical challenges.
            </p>

            <p>
                For ${mode.toLowerCase()},
                identify the main idea,
                supporting evidence,
                assumptions, limitations,
                and possible follow-up questions.
            </p>
        </section>
    `;
}

function makeSections(meta) {
    let html = "";

    for (
        let n = 1;
        n <= SECTIONS_PER_ARTICLE;
        n++
    ) {
        html += sectionText(
            meta,
            n
        );
    }

    return html;
}


/* =========================================================
   FULL ARTICLE
   ========================================================= */

function articleHTML(meta) {
    let extra = "";

    if (meta.feed === "Programming") {
        const code =
            programmingExample(
                meta.kind,
                meta.subject
            );

        extra = `
            <h3>Starting example</h3>

            <pre><code>${esc(code)}</code></pre>
        `;
    }

    if (meta.feed === "Media") {
        extra = `
            <div class="media-preview">
                ▶ ${meta.subject}
                ${meta.kind}
            </div>
        `;
    }

    return `
        <article>
            <div class="article-label">
                ${meta.feed}
                ·
                ${meta.number.toLocaleString()}
                / 100,000
            </div>

            <h2>${meta.title}</h2>

            <p>
                This entry contains
                <strong>
                    ${SECTIONS_PER_ARTICLE}
                    detailed sections
                </strong>.
            </p>

            ${extra}

            ${makeSections(meta)}
        </article>
    `;
}


/* =========================================================
   INDEXING
   ========================================================= */

function getMeta(feed, index) {
    if (
        index < 0 ||
        index >= ITEMS_PER_FEED
    ) {
        return null;
    }

    return itemMeta(
        feed,
        index
    );
}

function getAllMeta(index) {
    const total =
        ITEMS_PER_FEED *
        realFeeds.length;

    if (
        index < 0 ||
        index >= total
    ) {
        return null;
    }

    const feedIndex =
        index %
        realFeeds.length;

    const localIndex =
        Math.floor(
            index /
            realFeeds.length
        );

    return getMeta(
        realFeeds[feedIndex],
        localIndex
    );
}


/* =========================================================
   PAGE
   ========================================================= */

document.body.innerHTML = "";

Object.assign(
    document.body.style,
    {
        margin: "0",
        background: "#0d0d0d",
        color: "#eeeeee",
        fontFamily:
            "Arial, sans-serif",
        overflow: "hidden"
    }
);

const tabs =
    document.createElement("nav");

Object.assign(
    tabs.style,
    {
        height: "54px",
        display: "flex",
        alignItems: "center",
        gap: "24px",
        padding: "0 24px",
        boxSizing: "border-box",
        background: "#151515",
        borderBottom:
            "1px solid #292929",
        overflowX: "auto"
    }
);

const main =
    document.createElement("main");

Object.assign(
    main.style,
    {
        height:
            "calc(100vh - 54px)",
        overflow: "hidden"
    }
);

document.body.append(
    tabs,
    main
);


/* =========================================================
   CSS FROM JS ONLY
   ========================================================= */

const style =
    document.createElement("style");

style.textContent = `
    * {
        box-sizing: border-box;
    }

    article {
        background: #181818;
        border: 1px solid #292929;
        border-radius: 14px;
        padding: 26px;
        margin-bottom: 22px;
        line-height: 1.6;
    }

    article h2 {
        font-size: 28px;
        margin-top: 8px;
    }

    article h3 {
        margin-top: 30px;
        font-size: 20px;
    }

    article section {
        padding-top: 8px;
        border-top: 1px solid #242424;
        margin-top: 25px;
    }

    pre {
        background: #080808;
        border: 1px solid #252525;
        padding: 18px;
        border-radius: 10px;
        overflow-x: auto;
    }

    code {
        font-family: monospace;
    }

    .article-label {
        color: #777;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .media-preview {
        padding: 60px 20px;
        background: #090909;
        border: 1px solid #292929;
        border-radius: 12px;
        margin: 22px 0;
        text-align: center;
        font-size: 24px;
    }

    .feed-tab:hover {
        color: #fff !important;
    }

    input::placeholder {
        color: #666;
    }
`;

document.head.appendChild(style);


/* =========================================================
   TABS
   ========================================================= */

let activeFeed = "All";

feeds.forEach(feed => {
    const tab =
        document.createElement("span");

    tab.className = "feed-tab";

    tab.dataset.feed = feed;

    tab.textContent =
        feed === "All"
            ? "All · 600K"
            : `${feed} · 100K`;

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

    tab.onclick = () => {
        activeFeed = feed;

        document
            .querySelectorAll(
                ".feed-tab"
            )
            .forEach(other => {
                other.style.color =
                    "#888";

                other.style.borderBottom =
                    "2px solid transparent";
            });

        tab.style.color =
            "#fff";

        tab.style.borderBottom =
            "2px solid #fff";

        showFeed(feed);
    };

    tabs.appendChild(tab);
});


/* =========================================================
   POSTED
   ========================================================= */

const POST_STORAGE_KEY = "knowledge-universe-posts";

function loadPosts() {
    try {
        const data =
            JSON.parse(
                localStorage.getItem(
                    POST_STORAGE_KEY
                ) || "[]"
            );

        return Array.isArray(data)
            ? data
            : [];
    } catch (error) {
        console.error(
            "Could not load posts:",
            error
        );

        return [];
    }
}

function savePosts(posts) {
    localStorage.setItem(
        POST_STORAGE_KEY,
        JSON.stringify(posts)
    );
}

function addPost(title, category, text) {
    const posts = loadPosts();

    posts.unshift({
        id:
            Date.now() +
            "-" +
            Math.random()
                .toString(36)
                .slice(2),

        title,
        category,
        text,

        created:
            new Date().toISOString()
    });

    savePosts(posts);
}

function deletePost(id) {
    const posts =
        loadPosts().filter(
            post => post.id !== id
        );

    savePosts(posts);

    showPostedFeed();
}

function showPostedFeed() {
    main.innerHTML = "";

    const wrapper =
        document.createElement("div");

    Object.assign(
        wrapper.style,
        {
            height: "100%",
            maxWidth: "950px",
            margin: "auto",
            padding: "20px",
            overflowY: "auto"
        }
    );

    const heading =
        document.createElement("h1");

    heading.textContent = "Posted";
    heading.style.marginTop = "0";

    const description =
        document.createElement("p");

    description.textContent =
        "Create your own posts and keep them in this browser.";

    description.style.color =
        "#888";


    /* =========================
       POST COMPOSER
       ========================= */

    const composer =
        document.createElement("section");

    Object.assign(
        composer.style,
        {
            background: "#171717",
            border:
                "1px solid #292929",
            borderRadius: "14px",
            padding: "20px",
            marginBottom: "25px"
        }
    );

    const composerTitle =
        document.createElement("h2");

    composerTitle.textContent =
        "Create Post";

    composerTitle.style.marginTop =
        "0";


    const titleInput =
        document.createElement("input");

    titleInput.placeholder =
        "Post title";

    Object.assign(
        titleInput.style,
        {
            width: "100%",
            padding: "13px",
            marginBottom: "10px",
            background: "#0e0e0e",
            color: "white",
            border:
                "1px solid #333",
            borderRadius: "9px",
            outline: "none"
        }
    );


    const category =
        document.createElement("select");

    [
        "Programming",
        "Biology",
        "Courses",
        "Pages",
        "Media",
        "Shows",
        "General"
    ].forEach(name => {
        const option =
            document.createElement(
                "option"
            );

        option.value = name;
        option.textContent = name;

        category.appendChild(option);
    });

    Object.assign(
        category.style,
        {
            width: "100%",
            padding: "13px",
            marginBottom: "10px",
            background: "#0e0e0e",
            color: "white",
            border:
                "1px solid #333",
            borderRadius: "9px"
        }
    );


    const text =
        document.createElement(
            "textarea"
        );

    text.placeholder =
        "Write your post...";

    Object.assign(
        text.style,
        {
            width: "100%",
            minHeight: "180px",
            resize: "vertical",
            padding: "13px",
            background: "#0e0e0e",
            color: "white",
            border:
                "1px solid #333",
            borderRadius: "9px",
            outline: "none",
            fontFamily:
                "Arial, sans-serif",
            marginBottom: "12px"
        }
    );


    /*
       Clickable DIV instead of <button>
    */

    const publish =
        document.createElement("div");

    publish.textContent = "Post";

    Object.assign(
        publish.style,
        {
            display:
                "inline-block",
            padding:
                "11px 20px",
            background:
                "#eeeeee",
            color:
                "#111111",
            borderRadius:
                "9px",
            cursor:
                "pointer",
            fontWeight:
                "700",
            userSelect:
                "none"
        }
    );

    publish.onclick = () => {
        const postTitle =
            titleInput.value.trim();

        const postText =
            text.value.trim();

        if (
            !postTitle ||
            !postText
        ) {
            publish.textContent =
                "Add a title + content";

            setTimeout(() => {
                publish.textContent =
                    "Post";
            }, 1200);

            return;
        }

        addPost(
            postTitle,
            category.value,
            postText
        );

        showPostedFeed();
    };


    composer.append(
        composerTitle,
        titleInput,
        category,
        text,
        publish
    );


    wrapper.append(
        heading,
        description,
        composer
    );


    /* =========================
       POSTS
       ========================= */

    const posts =
        loadPosts();

    const count =
        document.createElement("p");

    count.textContent =
        `${posts.length.toLocaleString()} posts`;

    count.style.color = "#777";

    wrapper.appendChild(count);


    if (posts.length === 0) {
        const empty =
            document.createElement("div");

        empty.textContent =
            "Nothing posted yet.";

        Object.assign(
            empty.style,
            {
                padding: "40px",
                textAlign:
                    "center",
                color: "#666",
                border:
                    "1px dashed #333",
                borderRadius:
                    "12px"
            }
        );

        wrapper.appendChild(empty);
    }


    posts.forEach(post => {
        const article =
            document.createElement(
                "article"
            );

        const meta =
            document.createElement(
                "div"
            );

        meta.className =
            "article-label";

        const date =
            new Date(
                post.created
            );

        meta.textContent =
            `${post.category} · ${date.toLocaleString()}`;


        const title =
            document.createElement("h2");

        title.textContent =
            post.title;


        const body =
            document.createElement("p");

        /*
           textContent prevents HTML injection.
        */

        body.textContent =
            post.text;

        body.style.whiteSpace =
            "pre-wrap";


        const remove =
            document.createElement("span");

        remove.textContent =
            "Delete";

        Object.assign(
            remove.style,
            {
                color: "#888",
                cursor:
                    "pointer",
                fontSize:
                    "13px",
                userSelect:
                    "none"
            }
        );

        remove.onclick = () => {
            deletePost(post.id);
        };


        article.append(
            meta,
            title,
            body,
            remove
        );

        wrapper.appendChild(
            article
        );
    });


    main.appendChild(wrapper);
}


/* =========================================================
   FEED
   ========================================================= */

function showFeed(feed) {

    if (feed === "Posted") {
        showPostedFeed();
        return;
    }

    main.innerHTML = "";

    const wrapper =
        document.createElement("div");

    Object.assign(
        wrapper.style,
        {
            height: "100%",
            maxWidth: "950px",
            margin: "auto",
            padding: "20px"
        }
    );

    const header =
        document.createElement("header");

    const title =
        document.createElement("h1");

    title.textContent = feed;

    title.style.margin =
        "0 0 4px";

    const count =
        document.createElement("div");

    count.textContent =
        feed === "All"
            ? "600,000 full entries"
            : "100,000 full entries";

    count.style.color = "#777";

    count.style.marginBottom =
        "12px";

    const search =
        document.createElement("input");

    search.type = "search";

    search.placeholder =
        feed === "All"
            ? "Search all feeds..."
            : `Search ${feed}...`;

    Object.assign(
        search.style,
        {
            width: "100%",
            padding: "13px",
            background: "#171717",
            color: "#fff",
            border:
                "1px solid #333",
            borderRadius: "9px",
            outline: "none",
            marginBottom: "15px"
        }
    );

    header.append(
        title,
        count,
        search
    );

    const scroller =
        document.createElement("div");

    Object.assign(
        scroller.style,
        {
            height:
                "calc(100% - 125px)",
            overflowY: "auto",
            paddingRight: "8px"
        }
    );

    wrapper.append(
        header,
        scroller
    );

    main.appendChild(wrapper);

    let index = 0;
    let query = "";
    let loading = false;

    function nextMeta() {
        if (feed === "All") {
            return getAllMeta(
                index++
            );
        }

        return getMeta(
            feed,
            index++
        );
    }

    function matches(meta) {
        if (!query)
            return true;

        return (
            meta.title
                .toLowerCase()
                .includes(query) ||

            meta.subject
                .toLowerCase()
                .includes(query) ||

            meta.kind
                .toLowerCase()
                .includes(query) ||

            meta.feed
                .toLowerCase()
                .includes(query)
        );
    }

    function loadMore() {
        if (loading)
            return;

        loading = true;

        const fragment =
            document.createDocumentFragment();

        let added = 0;
        let checked = 0;

        while (
            added <
                ARTICLES_PER_LOAD &&
            checked < 1000000
        ) {
            const meta =
                nextMeta();

            if (!meta)
                break;

            checked++;

            if (!matches(meta))
                continue;

            const holder =
                document.createElement("div");

            holder.innerHTML =
                articleHTML(meta);

            fragment.appendChild(
                holder.firstElementChild
            );

            added++;
        }

        scroller.appendChild(
            fragment
        );

        loading = false;
    }

    search.oninput = () => {
        query =
            search.value
                .trim()
                .toLowerCase();

        index = 0;

        scroller.innerHTML = "";

        loadMore();
    };

    scroller.addEventListener(
        "scroll",
        () => {
            const distance =
                scroller.scrollHeight -
                scroller.scrollTop -
                scroller.clientHeight;

            if (distance < 900) {
                loadMore();
            }
        }
    );

    loadMore();
}


/* =========================================================
   START
   ========================================================= */

const allTab =
    document.querySelector(
        '[data-feed="All"]'
    );

allTab.style.color = "#fff";

allTab.style.borderBottom =
    "2px solid #fff";

showFeed("All");
