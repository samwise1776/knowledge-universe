const ITEMS_PER_FEED = 100000;
const CHUNK_SIZE = 2;

const feeds = [
    "All",
    "Programming",
    "Biology",
    "Courses",
    "Pages",
    "Media",
    "Shows"
];

const contentFeeds = feeds.slice(1);

const languages = [
    "Perl","JavaScript","Python","Java","C","C++","C#","Rust",
    "Go","Lua","Ruby","PHP","Swift","Kotlin","Fortran","COBOL",
    "Assembly","Bash","TypeScript","R","Dart","Scala","Haskell"
];

const programmingTopics = [
    "Variables","Functions","Loops","Conditions","Arrays","Strings",
    "Files","Networking","Sockets","Databases","Algorithms",
    "Data Structures","Processes","Threads","Memory","Compilers",
    "Interpreters","Parsers","GUIs","APIs","Automation","Testing",
    "Debugging","Packages","Graphics","Operating Systems"
];

const biologyTopics = [
    "Cells","DNA","RNA","Genetics","Evolution","Proteins","Enzymes",
    "Bacteria","Viruses","Plants","Animals","Ecology","Microbiology",
    "Botany","Zoology","Anatomy","Physiology","Neuroscience",
    "Immunology","Biochemistry","Mitosis","Meiosis","Photosynthesis",
    "Respiration","Natural Selection"
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

function escapeHTML(text) {
    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

function programmingItem(i) {
    const language =
        languages[i % languages.length];

    const topic =
        programmingTopics[
            Math.floor(i / languages.length) %
            programmingTopics.length
        ];

    const level =
        levels[
            Math.floor(
                i /
                languages.length /
                programmingTopics.length
            ) % levels.length
        ];

    const articleNumber = i + 1;

    let code;

    switch (language) {
        case "Perl":
            code =
`use v5.40;

my $topic = "${topic}";

sub describe {
    my ($value) = @_;

    say "Learning: $value";
}

describe($topic);`;
            break;

        case "JavaScript":
            code =
`const topic = "${topic}";

function describe(value) {
    console.log("Learning:", value);
}

describe(topic);`;
            break;

        case "Python":
            code =
`topic = "${topic}"

def describe(value):
    print("Learning:", value)

describe(topic)`;
            break;

        case "Java":
            code =
`public class Main {
    static void describe(String value) {
        System.out.println(
            "Learning: " + value
        );
    }

    public static void main(String[] args) {
        String topic = "${topic}";

        describe(topic);
    }
}`;
            break;

        case "C":
            code =
`#include <stdio.h>

void describe(const char *value) {
    printf("Learning: %s\\n", value);
}

int main(void) {
    const char *topic = "${topic}";

    describe(topic);

    return 0;
}`;
            break;

        case "C++":
            code =
`#include <iostream>
#include <string>

void describe(const std::string& value) {
    std::cout
        << "Learning: "
        << value
        << "\\n";
}

int main() {
    std::string topic = "${topic}";

    describe(topic);
}`;
            break;

        case "Rust":
            code =
`fn describe(value: &str) {
    println!("Learning: {}", value);
}

fn main() {
    let topic = "${topic}";

    describe(topic);
}`;
            break;

        case "Go":
            code =
`package main

import "fmt"

func describe(value string) {
    fmt.Println("Learning:", value)
}

func main() {
    topic := "${topic}"

    describe(topic)
}`;
            break;

        case "Lua":
            code =
`local topic = "${topic}"

local function describe(value)
    print("Learning: " .. value)
end

describe(topic)`;
            break;

        case "Bash":
            code =
`#!/bin/bash

topic="${topic}"

describe() {
    echo "Learning: $1"
}

describe "$topic"`;
            break;

        default:
            code =
`// ${language}
// ${level}: ${topic}

// Article ${articleNumber}

// Explore:
// - syntax
// - behavior
// - debugging
// - performance
// - design
// - projects`;
    }


    /* =====================================================
       BUILD A MASSIVE ARTICLE ON DEMAND
       ===================================================== */

    const sections = [];


    const concepts = [
        "Syntax and notation",
        "Core behavior",
        "Data representation",
        "Control flow",
        "Runtime behavior",
        "Memory behavior",
        "Error handling",
        "Input and output",
        "Files and persistence",
        "Functions and abstraction",
        "Modules and organization",
        "Libraries and dependencies",
        "Testing",
        "Debugging",
        "Performance",
        "Readability",
        "Maintainability",
        "Security",
        "Portability",
        "Tooling"
    ];


    const practicalTopics = [
        "small scripts",
        "command-line tools",
        "desktop applications",
        "servers",
        "automation",
        "data processing",
        "developer tools",
        "build systems",
        "network programs",
        "system utilities",
        "games",
        "editors",
        "compilers",
        "interpreters",
        "package managers",
        "testing tools",
        "monitoring systems",
        "file utilities",
        "database programs",
        "web applications"
    ];


    const mistakes = [
        "using unclear names",
        "mixing unrelated responsibilities",
        "ignoring error conditions",
        "duplicating logic",
        "creating unnecessary global state",
        "forgetting input validation",
        "assuming data is always valid",
        "hiding important control flow",
        "writing overly large functions",
        "ignoring resource cleanup",
        "performing unnecessary work",
        "using the wrong data structure",
        "making debugging difficult",
        "depending on undocumented behavior",
        "ignoring edge cases"
    ];


    const exercises = [
        "Create a tiny example from scratch.",
        "Modify the example to accept user input.",
        "Add validation for invalid input.",
        "Split the program into multiple functions.",
        "Add useful error messages.",
        "Save information to a file.",
        "Read the information back.",
        "Create a command-line interface.",
        "Add a configuration option.",
        "Measure how long an operation takes.",
        "Write a reusable helper.",
        "Create several test cases.",
        "Handle an empty input case.",
        "Handle a very large input case.",
        "Refactor duplicated code.",
        "Add comments only where necessary.",
        "Improve naming throughout the program.",
        "Build a second implementation.",
        "Compare the two approaches.",
        "Turn the example into a small project."
    ];


    /*
        20 conceptual sections
    */

    concepts.forEach((concept, n) => {

        sections.push(`
            <section>
                <h2>
                    ${n + 1}. ${concept}
                </h2>

                <p>
                    When studying
                    <strong>${topic}</strong>
                    in
                    <strong>${language}</strong>,
                    ${concept.toLowerCase()} is one of the
                    major areas worth understanding.
                    The exact implementation depends on
                    the language, runtime, compiler,
                    libraries, and surrounding program.
                </p>

                <p>
                    At the ${level.toLowerCase()} level,
                    focus on what the program is doing,
                    why the operation exists, what data
                    enters it, what data leaves it, and
                    which assumptions the code makes.
                    Understanding those relationships
                    makes debugging and extending the
                    program much easier.
                </p>

                <p>
                    A useful habit is to isolate one
                    behavior at a time. Build the smallest
                    working example, verify it, deliberately
                    break it, inspect the failure, and then
                    expand the program gradually.
                </p>
            </section>
        `);

    });


    /*
        20 practical application sections
    */

    practicalTopics.forEach((project, n) => {

        sections.push(`
            <section>
                <h2>
                    ${21 + n}. Using ${topic}
                    in ${project}
                </h2>

                <p>
                    ${topic} can appear inside ${project}.
                    In ${language}, the implementation can
                    range from a few lines of code to a
                    large subsystem depending on the
                    requirements.
                </p>

                <p>
                    Begin by identifying the smallest
                    useful feature. Decide what inputs it
                    needs, what output it produces, how
                    errors should be represented, and
                    which part of the program owns its
                    state.
                </p>

                <p>
                    Once that works, add features
                    incrementally instead of building the
                    entire system at once. This keeps
                    failures local and makes performance
                    problems easier to locate.
                </p>
            </section>
        `);

    });


    /*
        15 mistake/debugging sections
    */

    mistakes.forEach((mistake, n) => {

        sections.push(`
            <section>
                <h2>
                    ${41 + n}. Common mistake:
                    ${mistake}
                </h2>

                <p>
                    A frequent problem when working with
                    ${topic} is ${mistake}.
                    This can make a program harder to
                    understand, debug, maintain, or
                    optimize.
                </p>

                <p>
                    When investigating the problem, reduce
                    the program to the smallest case that
                    still fails. Inspect important values,
                    confirm control flow, verify assumptions,
                    and compare expected behavior with
                    actual behavior.
                </p>

                <p>
                    After fixing the problem, keep a small
                    test that reproduces the original
                    failure. That turns a one-time bug fix
                    into protection against regressions.
                </p>
            </section>
        `);

    });


    /*
        20 exercise sections
    */

    exercises.forEach((exercise, n) => {

        sections.push(`
            <section>
                <h2>
                    ${56 + n}. Exercise ${n + 1}
                </h2>

                <p>
                    ${exercise}
                </p>

                <p>
                    Use ${language} and make
                    <strong>${topic}</strong>
                    the central concept of the exercise.
                    Start with the smallest possible
                    implementation before adding additional
                    behavior.
                </p>

                <p>
                    After it works, test at least one normal
                    case, one unusual case, and one invalid
                    case. Then explain why your solution
                    behaves correctly.
                </p>
            </section>
        `);

    });


    /*
        10 architecture sections
    */

    for (let n = 0; n < 10; n++) {

        sections.push(`
            <section>
                <h2>
                    ${76 + n}. Architecture Study
                    ${n + 1}
                </h2>

                <p>
                    Consider a larger ${language}
                    application where ${topic} is only one
                    component. Decide which module should
                    own it, which modules may access it,
                    and which interfaces should separate
                    implementation details from users of
                    the component.
                </p>

                <p>
                    Compare a tightly coupled design with
                    a modular design. Think about testing,
                    replacement, reuse, performance,
                    readability, and how future features
                    would affect each architecture.
                </p>

                <p>
                    There is rarely one perfect structure.
                    Good architecture is usually a balance
                    between simplicity and the requirements
                    that actually exist.
                </p>
            </section>
        `);

    }


    /*
        10 performance sections
    */

    for (let n = 0; n < 10; n++) {

        sections.push(`
            <section>
                <h2>
                    ${86 + n}. Performance Investigation
                    ${n + 1}
                </h2>

                <p>
                    Performance work should begin with
                    measurement rather than guesses.
                    Create a repeatable workload involving
                    ${topic}, measure it, change one
                    variable, and measure again.
                </p>

                <p>
                    Consider execution time, allocations,
                    memory usage, system calls, disk access,
                    network operations, algorithmic
                    complexity, and unnecessary repeated
                    work.
                </p>

                <p>
                    An optimization that makes code much
                    harder to understand may not be useful
                    unless measurement shows that the
                    affected code is actually significant.
                </p>
            </section>
        `);

    }


    /*
        Final 5 sections = 100 total
    */

    sections.push(`
        <section>
            <h2>96. Testing strategy</h2>

            <p>
                Test small behaviors independently,
                then test how they interact. Include normal
                inputs, boundaries, malformed data, empty
                data, and unusually large data.
            </p>
        </section>
    `);


    sections.push(`
        <section>
            <h2>97. Debugging strategy</h2>

            <p>
                Reproduce the failure consistently,
                minimize the failing example, inspect
                state, verify assumptions, and change one
                thing at a time.
            </p>
        </section>
    `);


    sections.push(`
        <section>
            <h2>98. Mini project</h2>

            <p>
                Build a small ${language} application that
                uses ${topic} as a major feature. Give it
                real input, useful output, error handling,
                configuration, and at least a few tests.
            </p>
        </section>
    `);


    sections.push(`
        <section>
            <h2>99. Expansion challenge</h2>

            <p>
                Take the mini project and redesign it so
                another program could reuse the core
                ${topic.toLowerCase()} functionality.
                Separate the reusable logic from the user
                interface.
            </p>
        </section>
    `);


    sections.push(`
        <section>
            <h2>100. Mastery challenge</h2>

            <p>
                Implement the same idea twice using
                different approaches. Compare complexity,
                readability, performance, extensibility,
                and failure behavior.
            </p>

            <p>
                Explain which design you would choose for
                a small project and which design you would
                choose for a large project.
            </p>
        </section>
    `);


    return {
        feed: "Programming",

        title:
            `${language}: ${level} ${topic}`,

        body: `
            <div style="
                padding:20px;
                background:#111;
                border:1px solid #292929;
                border-radius:12px;
                margin-bottom:25px;
            ">
                <strong>
                    Programming article
                    ${articleNumber.toLocaleString()}
                    / 100,000
                </strong>

                <p>
                    Language:
                    ${language}
                </p>

                <p>
                    Topic:
                    ${topic}
                </p>

                <p>
                    Level:
                    ${level}
                </p>

                <p>
                    This article contains
                    <strong>100 detailed sections</strong>.
                </p>
            </div>


            <h2>Starting example</h2>

            <pre><code>${escapeHTML(code)}</code></pre>


            <h2>Introduction</h2>

            <p>
                ${topic} is one part of the larger
                ${language} programming environment.
                Learning it well means understanding more
                than syntax: you also need to understand
                behavior, design decisions, errors,
                performance, testing, debugging, and how
                the feature interacts with the rest of a
                program.
            </p>


            ${sections.join("")}
        `
    };
}

function biologyItem(i) {
    const topic =
        biologyTopics[i % biologyTopics.length];

    const level =
        levels[
            Math.floor(i / biologyTopics.length) %
            levels.length
        ];

    const articleNumber = i + 1;

    const sections = [];

    const foundations = [
        "Definition and scope",
        "Historical background",
        "Important terminology",
        "Major structures",
        "Primary functions",
        "Cellular context",
        "Molecular context",
        "Genetic relationships",
        "Biochemical relationships",
        "Environmental context",
        "Development",
        "Regulation",
        "Communication",
        "Energy requirements",
        "Transport mechanisms",
        "Homeostasis",
        "Variation",
        "Adaptation",
        "Interactions",
        "Biological significance"
    ];

    const investigations = [
        "Microscopy",
        "Observation",
        "Sampling",
        "Controlled experiments",
        "DNA analysis",
        "RNA analysis",
        "Protein analysis",
        "Cell culture",
        "Field studies",
        "Statistical analysis",
        "Imaging",
        "Classification",
        "Comparative biology",
        "Model organisms",
        "Genetic experiments",
        "Biochemical assays",
        "Environmental measurement",
        "Population studies",
        "Long-term monitoring",
        "Computer modeling"
    ];

    const systems = [
        "cells",
        "tissues",
        "organs",
        "organ systems",
        "organisms",
        "populations",
        "communities",
        "ecosystems",
        "genes",
        "chromosomes",
        "proteins",
        "enzymes",
        "membranes",
        "metabolic pathways",
        "nervous systems",
        "immune systems",
        "reproductive systems",
        "circulatory systems",
        "microbial communities",
        "evolutionary lineages"
    ];

    const questions = [
        "What structures are involved?",
        "What is the main function?",
        "How is the process regulated?",
        "What causes variation?",
        "How is information transmitted?",
        "How does the environment affect it?",
        "How does it change over time?",
        "What happens when the process fails?",
        "How can it be measured?",
        "How can it be experimentally tested?",
        "How is energy used?",
        "What molecules participate?",
        "What genes are involved?",
        "What evolutionary pressures affect it?",
        "How does it interact with other systems?",
        "What organisms demonstrate it clearly?",
        "What are the main limitations of current models?",
        "Which observations support the explanation?",
        "What competing hypotheses exist?",
        "What further experiments would improve understanding?"
    ];

    foundations.forEach((name, n) => {
        sections.push(`
            <section>
                <h2>${n + 1}. ${name}</h2>

                <p>
                    In the study of <strong>${topic}</strong>,
                    ${name.toLowerCase()} provides an important
                    foundation for understanding how the subject
                    fits into biology as a whole.
                </p>

                <p>
                    At the ${level.toLowerCase()} level, it is
                    useful to connect visible biological effects
                    with the underlying cellular, molecular,
                    genetic, and environmental mechanisms.
                </p>

                <p>
                    A strong explanation should identify the
                    important structures, describe their roles,
                    and explain how changes in one part of the
                    system can influence other parts.
                </p>
            </section>
        `);
    });

    investigations.forEach((method, n) => {
        sections.push(`
            <section>
                <h2>${21 + n}. Investigating ${topic} with ${method}</h2>

                <p>
                    ${method} can be used to investigate
                    ${topic.toLowerCase()} by collecting evidence
                    about biological structure, activity,
                    variation, or change.
                </p>

                <p>
                    Good experimental design requires a clear
                    question, appropriate controls, reliable
                    measurements, repeatable procedures, and a
                    careful distinction between observation and
                    interpretation.
                </p>

                <p>
                    Results should be compared with the original
                    hypothesis while also considering uncertainty,
                    measurement error, sample size, and alternative
                    explanations.
                </p>
            </section>
        `);
    });

    systems.forEach((system, n) => {
        sections.push(`
            <section>
                <h2>${41 + n}. ${topic} and ${system}</h2>

                <p>
                    ${topic} can be studied in relation to
                    ${system}. This helps connect the topic to a
                    broader level of biological organization.
                </p>

                <p>
                    Biological systems rarely operate in
                    isolation. A change involving ${topic.toLowerCase()}
                    may alter signaling, metabolism, reproduction,
                    development, survival, or interactions with
                    the environment.
                </p>

                <p>
                    Studying these connections makes it easier to
                    understand why the same biological mechanism
                    can have different effects in different
                    organisms or environments.
                </p>
            </section>
        `);
    });

    questions.forEach((question, n) => {
        sections.push(`
            <section>
                <h2>${61 + n}. Research question ${n + 1}</h2>

                <p><strong>${question}</strong></p>

                <p>
                    Apply this question specifically to
                    ${topic}. Identify what evidence would be
                    needed to answer it and what measurements
                    would distinguish one explanation from
                    another.
                </p>

                <p>
                    Consider whether the answer changes between
                    species, developmental stages, environmental
                    conditions, or different levels of biological
                    organization.
                </p>
            </section>
        `);
    });

    for (let n = 0; n < 10; n++) {
        sections.push(`
            <section>
                <h2>${81 + n}. Case study ${n + 1}</h2>

                <p>
                    Imagine a biological system where
                    ${topic.toLowerCase()} changes significantly.
                    Predict the immediate effect, secondary
                    effects, and possible long-term consequences.
                </p>

                <p>
                    Identify which observations would support
                    your prediction and which observations would
                    force you to revise it.
                </p>

                <p>
                    Then compare the effects at the molecular,
                    cellular, organismal, and ecological levels.
                </p>
            </section>
        `);
    }

    sections.push(`
        <section>
            <h2>91. Vocabulary review</h2>

            <p>
                Define the major terms associated with ${topic}
                and explain how the terms relate to one another.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>92. Structure and function</h2>

            <p>
                Identify the important structures involved in
                ${topic} and connect each structure to its
                biological function.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>93. Molecular mechanisms</h2>

            <p>
                Trace the relevant molecules, reactions,
                signals, or genetic information involved in
                ${topic}.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>94. Environmental effects</h2>

            <p>
                Explain how temperature, nutrients, competition,
                stress, or other environmental factors may
                influence ${topic}.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>95. Evolutionary perspective</h2>

            <p>
                Consider how natural selection, mutation,
                inheritance, and variation may have shaped
                ${topic} across generations.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>96. Experimental design challenge</h2>

            <p>
                Design an experiment investigating one specific
                aspect of ${topic}. Include a hypothesis,
                independent variable, dependent variable,
                controls, and predicted results.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>97. Data interpretation challenge</h2>

            <p>
                Imagine receiving unexpected data about
                ${topic}. List several possible explanations and
                describe how you would distinguish among them.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>98. Compare two organisms</h2>

            <p>
                Compare how ${topic} operates in two different
                organisms. Identify similarities, differences,
                and possible evolutionary explanations.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>99. Systems biology challenge</h2>

            <p>
                Connect ${topic} with at least three other
                biological systems and explain how changes could
                spread through the larger network.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>100. Mastery challenge</h2>

            <p>
                Explain ${topic} at four scales: molecular,
                cellular, organismal, and ecological.
            </p>

            <p>
                Then identify one unanswered research question
                and describe an experiment that could help answer
                it.
            </p>
        </section>
    `);

    return {
        feed: "Biology",

        title:
            `${level}: ${topic}`,

        body: `
            <div style="
                padding:20px;
                background:#111;
                border:1px solid #292929;
                border-radius:12px;
                margin-bottom:25px;
            ">
                <strong>
                    Biology article
                    ${articleNumber.toLocaleString()}
                    / 100,000
                </strong>

                <p>Topic: ${topic}</p>
                <p>Level: ${level}</p>

                <p>
                    This article contains
                    <strong>100 detailed biology sections</strong>.
                </p>
            </div>

            <h2>Introduction</h2>

            <p>
                ${topic} is part of a larger biological system.
                Understanding it requires connecting structures,
                functions, molecular mechanisms, genetics,
                development, evolution, and environmental
                interactions.
            </p>

            <p>
                Rather than treating ${topic.toLowerCase()} as
                an isolated fact, this article examines how it
                behaves at multiple biological scales and how
                scientists investigate it using evidence.
            </p>

            ${sections.join("")}
        `
    };
}

function courseItem(i) {
    const subjects = [
        ...languages,
        ...biologyTopics,
        "Linux",
        "Networking",
        "Databases",
        "Operating Systems",
        "Web Development",
        "Game Development",
        "Algorithms",
        "Computer Graphics",
        "Cybersecurity",
        "Compilers",
        "Distributed Systems"
    ];

    const subject =
        subjects[i % subjects.length];

    const level =
        levels[
            Math.floor(i / subjects.length) %
            levels.length
        ];

    const courseNumber = i + 1;
    const sections = [];

    const foundations = [
        "Introduction",
        "Terminology",
        "Core concepts",
        "Basic architecture",
        "Tools",
        "Environment setup",
        "First example",
        "Input and output",
        "Data",
        "Control flow",
        "Functions",
        "Organization",
        "Debugging",
        "Testing",
        "Errors",
        "Performance",
        "Security",
        "Design",
        "Best practices",
        "Review"
    ];

    foundations.forEach((topic, n) => {
        sections.push(`
            <section>
                <h2>${n + 1}. ${topic}</h2>

                <p>
                    This lesson introduces ${topic.toLowerCase()}
                    in the context of <strong>${subject}</strong>.
                </p>

                <p>
                    At the ${level.toLowerCase()} level,
                    focus on understanding what the concept does,
                    why it exists, how it is used, and how it
                    interacts with the rest of the system.
                </p>

                <p>
                    Try building a small example before moving on.
                    Modify it, break it intentionally, debug it,
                    and explain the behavior in your own words.
                </p>
            </section>
        `);
    });

    for (let n = 0; n < 20; n++) {
        sections.push(`
            <section>
                <h2>${21 + n}. Guided exercise ${n + 1}</h2>

                <p>
                    Build a small ${subject} exercise that focuses
                    on one clear behavior.
                </p>

                <p>
                    Add input, useful output, validation,
                    error handling, and at least one edge case.
                </p>

                <p>
                    After it works, refactor the solution so the
                    important logic is easier to understand and reuse.
                </p>
            </section>
        `);
    }

    for (let n = 0; n < 20; n++) {
        sections.push(`
            <section>
                <h2>${41 + n}. Project stage ${n + 1}</h2>

                <p>
                    Expand the course project by adding another
                    practical ${subject} feature.
                </p>

                <p>
                    Keep the project modular. Separate unrelated
                    responsibilities and make each component have
                    a clear purpose.
                </p>

                <p>
                    Test the new feature independently before
                    connecting it to the rest of the application.
                </p>
            </section>
        `);
    }

    const deeper = [
        "Architecture",
        "Performance",
        "Profiling",
        "Testing strategy",
        "Debugging strategy",
        "Maintainability",
        "Scalability",
        "Portability",
        "Security",
        "Documentation",
        "APIs",
        "Automation",
        "Deployment",
        "Data design",
        "Interfaces",
        "Concurrency",
        "Resource management",
        "Failure recovery",
        "Monitoring",
        "Optimization"
    ];

    deeper.forEach((topic, n) => {
        sections.push(`
            <section>
                <h2>${61 + n}. ${topic}</h2>

                <p>
                    ${topic} becomes increasingly important as a
                    ${subject} project grows beyond a small example.
                </p>

                <p>
                    Compare multiple approaches and think about
                    complexity, readability, reliability, performance,
                    and how difficult each design would be to change.
                </p>
            </section>
        `);
    });

    for (let n = 0; n < 10; n++) {
        sections.push(`
            <section>
                <h2>${81 + n}. Challenge ${n + 1}</h2>

                <p>
                    Solve a larger ${subject} problem without following
                    a step-by-step solution.
                </p>

                <p>
                    Plan the design first, identify risks, implement
                    incrementally, test continuously, and document
                    important decisions.
                </p>
            </section>
        `);
    }

    sections.push(`
        <section>
            <h2>91. Review</h2>
            <p>Summarize the most important concepts from the course.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>92. Debugging lab</h2>
            <p>Take a broken ${subject} project and diagnose several independent failures.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>93. Refactoring lab</h2>
            <p>Improve a working but poorly structured project without changing its behavior.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>94. Performance lab</h2>
            <p>Measure a slow operation, identify the bottleneck, and verify an improvement.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>95. Testing lab</h2>
            <p>Create tests for normal, boundary, invalid, and unusual inputs.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>96. Architecture lab</h2>
            <p>Split a large ${subject} project into smaller, well-defined components.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>97. Documentation challenge</h2>
            <p>Document installation, usage, architecture, limitations, and examples.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>98. Capstone planning</h2>
            <p>Design a complete ${subject} project with requirements, milestones, and tests.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>99. Capstone implementation</h2>
            <p>Build the project incrementally and verify each major component independently.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>100. Final mastery challenge</h2>

            <p>
                Build a complete ${subject} project without a template.
                Explain its architecture, tradeoffs, testing strategy,
                performance considerations, and future improvements.
            </p>
        </section>
    `);

    return {
        feed: "Courses",

        title:
            `${subject} ${level} Course`,

        body: `
            <div style="
                padding:20px;
                background:#111;
                border:1px solid #292929;
                border-radius:12px;
                margin-bottom:25px;
            ">
                <strong>
                    Course ${courseNumber.toLocaleString()}
                    / 100,000
                </strong>

                <p>Subject: ${subject}</p>
                <p>Level: ${level}</p>

                <p>
                    <strong>100 full lessons</strong>
                </p>
            </div>

            <h2>Course overview</h2>

            <p>
                This ${level.toLowerCase()} course takes
                ${subject} from foundational ideas through
                exercises, projects, architecture, debugging,
                testing, performance, and a final capstone.
            </p>

            ${sections.join("")}
        `
    };
}

function pageItem(i) {
    const types = [
        "Guide",
        "Reference",
        "Documentation",
        "Article",
        "Wiki",
        "Tutorial",
        "Handbook",
        "FAQ",
        "Specification",
        "Manual"
    ];

    const topics = [
        ...programmingTopics,
        ...biologyTopics,
        "Linux",
        "Networking",
        "Operating Systems",
        "Databases",
        "Software Design",
        "Computer Hardware",
        "Web Development",
        "Algorithms"
    ];

    const topic =
        topics[i % topics.length];

    const type =
        types[
            Math.floor(i / topics.length) %
            types.length
        ];

    const pageNumber = i + 1;
    const sections = [];

    const referenceSections = [
        "Definition",
        "Background",
        "Terminology",
        "Purpose",
        "Core concepts",
        "Structure",
        "Behavior",
        "Inputs",
        "Outputs",
        "Common uses",
        "Examples",
        "Patterns",
        "Alternatives",
        "Advantages",
        "Limitations",
        "Common mistakes",
        "Troubleshooting",
        "Performance",
        "Security",
        "Related topics"
    ];

    referenceSections.forEach((name, n) => {
        sections.push(`
            <section>
                <h2>${n + 1}. ${name}</h2>

                <p>
                    This section covers ${name.toLowerCase()}
                    for <strong>${topic}</strong>.
                </p>

                <p>
                    Understanding this area helps place ${topic}
                    into a broader technical or scientific context
                    and makes it easier to connect concepts together.
                </p>

                <p>
                    Where appropriate, compare examples, edge cases,
                    alternative approaches, and situations where the
                    concept behaves differently than expected.
                </p>
            </section>
        `);
    });

    for (let n = 0; n < 20; n++) {
        sections.push(`
            <section>
                <h2>${21 + n}. Example ${n + 1}</h2>

                <p>
                    Consider a practical example involving ${topic}.
                    Identify the important components, their roles,
                    and how information moves between them.
                </p>

                <p>
                    Then change one assumption and predict how the
                    result would differ.
                </p>
            </section>
        `);
    }

    for (let n = 0; n < 20; n++) {
        sections.push(`
            <section>
                <h2>${41 + n}. Question ${n + 1}</h2>

                <p>
                    What happens when one important part of
                    ${topic} changes, fails, or receives unusual input?
                </p>

                <p>
                    Work through several possible outcomes and identify
                    what evidence would distinguish them.
                </p>
            </section>
        `);
    }

    const advanced = [
        "Internal design",
        "Dependencies",
        "Interfaces",
        "Data flow",
        "Control flow",
        "State",
        "Error handling",
        "Recovery",
        "Scaling",
        "Optimization",
        "Testing",
        "Validation",
        "Monitoring",
        "Compatibility",
        "Portability",
        "Versioning",
        "Maintenance",
        "Extensibility",
        "Integration",
        "Future development"
    ];

    advanced.forEach((name, n) => {
        sections.push(`
            <section>
                <h2>${61 + n}. ${name}</h2>

                <p>
                    ${name} provides a deeper way to analyze
                    ${topic} beyond its surface-level definition.
                </p>

                <p>
                    Consider how different designs affect reliability,
                    complexity, performance, usability, and future
                    changes.
                </p>
            </section>
        `);
    });

    for (let n = 0; n < 10; n++) {
        sections.push(`
            <section>
                <h2>${81 + n}. Deep-dive scenario ${n + 1}</h2>

                <p>
                    Imagine ${topic} being used in a large real-world
                    system.
                </p>

                <p>
                    Identify likely failure points, performance issues,
                    dependencies, maintenance concerns, and design
                    tradeoffs.
                </p>
            </section>
        `);
    }

    sections.push(`
        <section>
            <h2>91. Quick reference</h2>
            <p>Summarize the most important facts about ${topic}.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>92. Key terminology</h2>
            <p>Define the vocabulary needed to discuss ${topic} precisely.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>93. Common misconceptions</h2>
            <p>Identify explanations that sound plausible but fail under closer examination.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>94. Comparison</h2>
            <p>Compare ${topic} with at least two related concepts.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>95. Troubleshooting checklist</h2>
            <p>Start with reproducibility, inspect state, isolate variables, and verify assumptions.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>96. Design checklist</h2>
            <p>Review requirements, interfaces, dependencies, errors, testing, and maintainability.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>97. Performance checklist</h2>
            <p>Measure before optimizing and locate the actual expensive operations.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>98. Further exploration</h2>
            <p>Connect ${topic} with related subjects and identify deeper questions.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>99. Practical challenge</h2>
            <p>Create or analyze a real example involving ${topic} and document what you discover.</p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>100. Master reference challenge</h2>

            <p>
                Explain ${topic} to a beginner, then explain it again
                at an advanced level including architecture,
                limitations, tradeoffs, edge cases, and applications.
            </p>
        </section>
    `);

    return {
        feed: "Pages",

        title:
            `${topic} ${type}`,

        body: `
            <div style="
                padding:20px;
                background:#111;
                border:1px solid #292929;
                border-radius:12px;
                margin-bottom:25px;
            ">
                <strong>
                    Page ${pageNumber.toLocaleString()}
                    / 100,000
                </strong>

                <p>Topic: ${topic}</p>
                <p>Type: ${type}</p>

                <p>
                    <strong>100 detailed reference sections</strong>
                </p>
            </div>

            <h2>${topic} ${type}</h2>

            <p>
                This page provides an extensive reference for
                ${topic}, covering foundational ideas, examples,
                questions, architecture, troubleshooting,
                performance, comparisons, and deeper analysis.
            </p>

            ${sections.join("")}
        `
    };
}

function buildMediaSections(subject, type, number) {
    const sections = [];

    const foundations = [
        "Purpose",
        "Background",
        "Main subject",
        "Terminology",
        "Audience",
        "Context",
        "Structure",
        "Presentation",
        "Visual design",
        "Audio design",
        "Information flow",
        "Examples",
        "Demonstrations",
        "Explanation style",
        "Accuracy",
        "Clarity",
        "Accessibility",
        "Organization",
        "Learning goals",
        "Summary"
    ];

    foundations.forEach((name, n) => {
        sections.push(`
            <section>
                <h2>${n + 1}. ${name}</h2>

                <p>
                    This ${type.toLowerCase()} explores
                    <strong>${subject}</strong> with a focus on
                    ${name.toLowerCase()}.
                </p>

                <p>
                    Good educational media should connect the
                    subject to concrete examples while separating
                    established facts, demonstrations, assumptions,
                    interpretations, and unanswered questions.
                </p>

                <p>
                    The goal is not merely to display information,
                    but to make the relationships between important
                    ideas visible and understandable.
                </p>
            </section>
        `);
    });

    for (let n = 0; n < 20; n++) {
        sections.push(`
            <section>
                <h2>${21 + n}. Detailed explanation ${n + 1}</h2>

                <p>
                    Examine one smaller part of ${subject} in depth.
                    Identify its components, purpose, inputs,
                    outputs, interactions, and limitations.
                </p>

                <p>
                    Compare the simple explanation with a more
                    technical explanation and identify which
                    details become important at each level.
                </p>

                <p>
                    Use examples to connect abstract ideas with
                    observable behavior.
                </p>
            </section>
        `);
    });

    for (let n = 0; n < 20; n++) {
        sections.push(`
            <section>
                <h2>${41 + n}. Demonstration ${n + 1}</h2>

                <p>
                    Build a demonstration involving ${subject}.
                    Begin with a normal example, then alter one
                    variable and observe how the result changes.
                </p>

                <p>
                    Explain what happened, why it happened, and
                    which assumptions were required for the
                    explanation.
                </p>

                <p>
                    If several explanations are possible, identify
                    what additional evidence would distinguish them.
                </p>
            </section>
        `);
    });

    for (let n = 0; n < 20; n++) {
        sections.push(`
            <section>
                <h2>${61 + n}. Analysis ${n + 1}</h2>

                <p>
                    Analyze ${subject} from another perspective:
                    structure, behavior, performance, history,
                    implementation, scientific evidence, design,
                    or practical application.
                </p>

                <p>
                    Look for relationships rather than isolated
                    facts. Identify causes, effects, dependencies,
                    feedback, tradeoffs, and edge cases.
                </p>

                <p>
                    Record any assumptions so they can be tested
                    rather than silently treated as facts.
                </p>
            </section>
        `);
    });

    for (let n = 0; n < 10; n++) {
        sections.push(`
            <section>
                <h2>${81 + n}. Media challenge ${n + 1}</h2>

                <p>
                    Create your own explanation of ${subject}
                    without copying the presentation used here.
                </p>

                <p>
                    Choose the most important ideas, organize them,
                    provide an example, and explain one common
                    misunderstanding.
                </p>

                <p>
                    Then simplify the explanation without making
                    it inaccurate.
                </p>
            </section>
        `);
    });

    sections.push(`
        <section>
            <h2>91. Key facts</h2>
            <p>
                Identify the most important facts needed to
                understand ${subject}.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>92. Vocabulary</h2>
            <p>
                Define the important terms used throughout this
                ${type.toLowerCase()}.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>93. Common misconception</h2>
            <p>
                Identify a common misunderstanding about
                ${subject} and explain why it is inaccurate.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>94. Comparison</h2>
            <p>
                Compare ${subject} with two related topics and
                identify important similarities and differences.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>95. Evidence</h2>
            <p>
                Identify what observations, experiments,
                measurements, documentation, or examples support
                the important claims about ${subject}.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>96. Practical application</h2>
            <p>
                Describe a real situation where knowledge of
                ${subject} is useful.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>97. Edge cases</h2>
            <p>
                Examine situations where the normal explanation
                of ${subject} becomes incomplete or requires
                additional detail.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>98. Further investigation</h2>
            <p>
                List deeper questions that could be investigated
                after understanding the foundations.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>99. Create your own media</h2>
            <p>
                Produce a new ${type.toLowerCase()} explaining
                ${subject}, including examples, evidence,
                structure, and a clear conclusion.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>100. Mastery challenge</h2>

            <p>
                Explain ${subject} at beginner, intermediate,
                and advanced levels.
            </p>

            <p>
                Preserve accuracy at every level while changing
                the amount of terminology and technical detail.
            </p>
        </section>
    `);

    return sections.join("");
}

function mediaItem(i) {
    const types = [
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

    const subjects = [
        ...languages,
        ...biologyTopics,
        "Linux",
        "Operating Systems",
        "Networking",
        "Databases",
        "Algorithms",
        "Computer Graphics",
        "Software Engineering",
        "Hardware"
    ];

    const subject =
        subjects[i % subjects.length];

    const type =
        types[
            Math.floor(i / subjects.length) %
            types.length
        ];

    const mediaNumber = i + 1;

    return {
        feed: "Media",

        title:
            `${subject} ${type} — Edition ${mediaNumber.toLocaleString()}`,

        body: `
            <div style="
                padding:20px;
                background:#111;
                border:1px solid #292929;
                border-radius:12px;
                margin-bottom:25px;
            ">
                <strong>
                    Media entry
                    ${mediaNumber.toLocaleString()}
                    / 100,000
                </strong>

                <p>Subject: ${subject}</p>
                <p>Format: ${type}</p>

                <p>
                    <strong>100 detailed sections</strong>
                </p>
            </div>

            <div class="media">
                ▶ ${subject} ${type}
            </div>

            <h2>Overview</h2>

            <p>
                This ${type.toLowerCase()} is a detailed exploration
                of ${subject}, combining explanation, examples,
                analysis, practical applications, challenges,
                comparisons, and further investigation.
            </p>

            ${buildMediaSections(
                subject,
                type,
                mediaNumber
            )}
        `
    };
}

function buildShowSections(name, episode, theme) {
    const sections = [];

    const opening = [
        "Episode introduction",
        "Main question",
        "Background",
        "Terminology",
        "Previous developments",
        "Key idea",
        "Core problem",
        "Important context",
        "First example",
        "Initial analysis",
        "Technical explanation",
        "Scientific explanation",
        "Design perspective",
        "Historical perspective",
        "Practical perspective",
        "Common misconception",
        "Alternative approach",
        "Important limitation",
        "What to watch for",
        "Opening summary"
    ];

    opening.forEach((topic, n) => {
        sections.push(`
            <section>
                <h2>${n + 1}. ${topic}</h2>

                <p>
                    Episode ${episode} of
                    <strong>${name}</strong> examines
                    ${theme.toLowerCase()} through the lens of
                    ${topic.toLowerCase()}.
                </p>

                <p>
                    The discussion connects the subject to
                    practical examples and explains why the idea
                    matters beyond a single isolated example.
                </p>

                <p>
                    Important assumptions, limitations, and
                    alternative interpretations are considered
                    rather than hidden.
                </p>
            </section>
        `);
    });

    for (let n = 0; n < 20; n++) {
        sections.push(`
            <section>
                <h2>${21 + n}. Segment ${n + 1}</h2>

                <p>
                    This segment explores another aspect of
                    ${theme.toLowerCase()}, moving from basic
                    concepts toward deeper implementation,
                    evidence, or design questions.
                </p>

                <p>
                    A concrete example is used to show how the
                    concept behaves in practice.
                </p>

                <p>
                    The segment ends by connecting the example
                    back to the larger theme of the episode.
                </p>
            </section>
        `);
    });

    for (let n = 0; n < 20; n++) {
        sections.push(`
            <section>
                <h2>${41 + n}. Deep dive ${n + 1}</h2>

                <p>
                    Take one component of ${theme} and examine it
                    in greater detail.
                </p>

                <p>
                    Consider internal structure, dependencies,
                    behavior, tradeoffs, failure modes, and
                    interactions with related systems.
                </p>

                <p>
                    Compare what happens under normal conditions
                    with what happens at boundaries or under
                    unusual conditions.
                </p>
            </section>
        `);
    });

    for (let n = 0; n < 20; n++) {
        sections.push(`
            <section>
                <h2>${61 + n}. Experiment ${n + 1}</h2>

                <p>
                    Design a small experiment or project related
                    to ${theme}.
                </p>

                <p>
                    Define the goal, choose a measurable result,
                    change one important variable, and compare
                    the outcome with the original expectation.
                </p>

                <p>
                    If the result is unexpected, list several
                    possible explanations before choosing one.
                </p>
            </section>
        `);
    });

    for (let n = 0; n < 10; n++) {
        sections.push(`
            <section>
                <h2>${81 + n}. Audience challenge ${n + 1}</h2>

                <p>
                    Apply one idea from Episode ${episode}
                    to a new problem.
                </p>

                <p>
                    Explain your reasoning, identify assumptions,
                    test an edge case, and describe how the
                    solution could be improved.
                </p>
            </section>
        `);
    });

    sections.push(`
        <section>
            <h2>91. Episode vocabulary</h2>
            <p>
                Review the important vocabulary introduced in
                Episode ${episode}.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>92. Main takeaways</h2>
            <p>
                Summarize the major ideas without relying on
                examples alone.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>93. Strongest example</h2>
            <p>
                Choose the example that best demonstrates the
                episode's central idea and explain why.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>94. Counterexample</h2>
            <p>
                Find a situation where a simple rule discussed
                in the episode does not apply cleanly.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>95. Real-world application</h2>
            <p>
                Connect ${theme} to a real project, system,
                experiment, or problem.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>96. Design challenge</h2>
            <p>
                Design something that uses one of the episode's
                core concepts.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>97. Investigation challenge</h2>
            <p>
                Choose one claim from the episode and determine
                what evidence would be needed to test it.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>98. Explain it simply</h2>
            <p>
                Explain the central idea to someone encountering
                ${theme} for the first time.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>99. Explain it technically</h2>
            <p>
                Explain the same idea again while including
                implementation details, limitations, and edge cases.
            </p>
        </section>
    `);

    sections.push(`
        <section>
            <h2>100. Episode mastery challenge</h2>

            <p>
                Build, investigate, or demonstrate something
                based on Episode ${episode}.
            </p>

            <p>
                Document your design, evidence, failures,
                improvements, and final conclusions.
            </p>
        </section>
    `);

    return sections.join("");
}

function showItem(i) {
    const shows = [
        ["Programming Weekly", "Programming"],
        ["Science Today", "Science"],
        ["Linux World", "Linux"],
        ["Biology Lab", "Biology"],
        ["Coding Live", "Software Development"],
        ["Technology Report", "Technology"],
        ["Software Workshop", "Software Engineering"],
        ["Research Talk", "Research"],
        ["Systems Inside", "Operating Systems"],
        ["Future Computing", "Computing"]
    ];

    const show =
        shows[i % shows.length];

    const name = show[0];
    const theme = show[1];

    const episode =
        Math.floor(i / shows.length) + 1;

    const entryNumber = i + 1;

    return {
        feed: "Shows",

        title:
            `${name} — Episode ${episode.toLocaleString()}`,

        body: `
            <div style="
                padding:20px;
                background:#111;
                border:1px solid #292929;
                border-radius:12px;
                margin-bottom:25px;
            ">
                <strong>
                    Show entry
                    ${entryNumber.toLocaleString()}
                    / 100,000
                </strong>

                <p>Show: ${name}</p>
                <p>Episode: ${episode.toLocaleString()}</p>
                <p>Theme: ${theme}</p>

                <p>
                    <strong>100 detailed episode sections</strong>
                </p>
            </div>

            <h2>${name}</h2>

            <h3>
                Episode ${episode.toLocaleString()}
            </h3>

            <p>
                This episode explores ${theme} through
                explanations, examples, deep dives,
                experiments, projects, challenges,
                comparisons, and analysis.
            </p>

            ${buildShowSections(
                name,
                episode,
                theme
            )}
        `
    };
}

const generators = {
    Programming: programmingItem,
    Biology: biologyItem,
    Courses: courseItem,
    Pages: pageItem,
    Media: mediaItem,
    Shows: showItem
};


/* ========================================
   PAGE
   ======================================== */

document.body.style.margin = "0";
document.body.style.background = "#0d0d0d";
document.body.style.color = "#eee";
document.body.style.fontFamily =
    "Arial, sans-serif";
document.body.style.overflow = "hidden";

const tabs =
    document.createElement("nav");

Object.assign(tabs.style, {
    height: "52px",
    display: "flex",
    alignItems: "center",
    gap: "24px",
    padding: "0 24px",
    background: "#151515",
    borderBottom: "1px solid #292929",
    overflowX: "auto",
    boxSizing: "border-box"
});

const main =
    document.createElement("main");

Object.assign(main.style, {
    height: "calc(100vh - 52px)",
    overflow: "hidden",
    boxSizing: "border-box"
});

document.body.append(
    tabs,
    main
);

let activeFeed = "All";


/* ========================================
   TABS
   ======================================== */

feeds.forEach(feed => {
    const tab =
        document.createElement("span");

    tab.dataset.feed = feed;

    tab.textContent =
        feed === "All"
            ? "All · 600K"
            : `${feed} · 100K`;

    Object.assign(tab.style, {
        cursor: "pointer",
        whiteSpace: "nowrap",
        color: "#888",
        fontWeight: "600",
        padding: "16px 0",
        borderBottom:
            "2px solid transparent",
        userSelect: "none"
    });

    tab.onclick = () => {
        activeFeed = feed;

        document
            .querySelectorAll("[data-feed]")
            .forEach(x => {
                x.style.color = "#888";
                x.style.borderBottom =
                    "2px solid transparent";
            });

        tab.style.color = "white";
        tab.style.borderBottom =
            "2px solid white";

        showFeed(feed);
    };

    tabs.appendChild(tab);
});


/* ========================================
   INDEX → ITEM
   ======================================== */

function getItem(feed, index) {
    if (feed !== "All") {
        if (index >= ITEMS_PER_FEED)
            return null;

        return generators[feed](index);
    }

    const total =
        ITEMS_PER_FEED *
        contentFeeds.length;

    if (index >= total)
        return null;

    const feedIndex =
        index % contentFeeds.length;

    const itemIndex =
        Math.floor(
            index /
            contentFeeds.length
        );

    return generators[
        contentFeeds[feedIndex]
    ](itemIndex);
}


/* ========================================
   FULL ARTICLE CARD
   ======================================== */

function createArticle(item) {
    const article =
        document.createElement("article");

    Object.assign(article.style, {
        background: "#171717",
        border: "1px solid #292929",
        borderRadius: "14px",
        padding: "24px",
        marginBottom: "18px",
        lineHeight: "1.6"
    });

    const label =
        document.createElement("div");

    label.textContent = item.feed;

    Object.assign(label.style, {
        color: "#777",
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "1px"
    });

    const title =
        document.createElement("h2");

    title.textContent = item.title;

    title.style.margin =
        "8px 0 16px";

    const body =
        document.createElement("div");

    body.innerHTML = item.body;

    article.append(
        label,
        title,
        body
    );

    article
        .querySelectorAll("pre")
        .forEach(pre => {
            Object.assign(pre.style, {
                padding: "16px",
                background: "#080808",
                border: "1px solid #222",
                borderRadius: "10px",
                overflowX: "auto"
            });
        });

    article
        .querySelectorAll(".media")
        .forEach(box => {
            Object.assign(box.style, {
                padding: "50px",
                margin: "20px 0",
                textAlign: "center",
                background: "#090909",
                borderRadius: "12px",
                border: "1px solid #292929",
                fontSize: "20px"
            });
        });

    return article;
}


/* ========================================
   FEED
   ======================================== */

function showFeed(feed) {
    main.innerHTML = "";

    const wrapper =
        document.createElement("div");

    Object.assign(wrapper.style, {
        maxWidth: "900px",
        height: "100%",
        margin: "auto",
        padding: "20px",
        boxSizing: "border-box"
    });

    const header =
        document.createElement("div");

    const title =
        document.createElement("h1");

    title.textContent = feed;
    title.style.margin = "0";

    const info =
        document.createElement("p");

    info.textContent =
        feed === "All"
            ? "600,000 full articles"
            : "100,000 full articles";

    info.style.color = "#777";

    const search =
        document.createElement("input");

    search.placeholder =
        feed === "All"
            ? "Search everything..."
            : `Search ${feed}...`;

    Object.assign(search.style, {
        boxSizing: "border-box",
        width: "100%",
        padding: "13px",
        background: "#181818",
        color: "white",
        border: "1px solid #333",
        borderRadius: "9px",
        outline: "none",
        marginBottom: "16px"
    });

    header.append(
        title,
        info,
        search
    );

    const scroller =
        document.createElement("div");

    Object.assign(scroller.style, {
        height: "calc(100% - 130px)",
        overflowY: "auto",
        paddingRight: "8px"
    });

    wrapper.append(
        header,
        scroller
    );

    main.appendChild(wrapper);

    let index = 0;
    let query = "";

    function matches(item) {
        if (!query)
            return true;

        return (
            item.title
                .toLowerCase()
                .includes(query) ||

            item.body
                .toLowerCase()
                .includes(query)
        );
    }

    function loadMore() {
        const fragment =
            document.createDocumentFragment();

        let added = 0;

        while (added < CHUNK_SIZE) {
            const item =
                getItem(feed, index++);

            if (!item)
                break;

            if (!matches(item))
                continue;

            fragment.appendChild(
                createArticle(item)
            );

            added++;
        }

        scroller.appendChild(fragment);
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

    scroller.onscroll = () => {
        if (
            scroller.scrollTop +
            scroller.clientHeight >=
            scroller.scrollHeight - 600
        ) {
            loadMore();
        }
    };

    loadMore();
}


/* ========================================
   START
   ======================================== */

const allTab =
    document.querySelector(
        '[data-feed="All"]'
    );

allTab.style.color = "white";
allTab.style.borderBottom =
    "2px solid white";

showFeed("All");
