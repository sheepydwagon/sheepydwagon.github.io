const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <style>
        header {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 650px;
            height: 80px;
            margin: auto;

            background-color: var(--theme-primary);

            border-top-left-radius: 30px;
            border-top-right-radius: 30px;

            margin-top: 10px;
        }

        h1 {
            font-family: sukacofe;

            color: var(--theme-dark);
            font-size: 2.25em;
        }
        h1 a {
            color: var(--theme-dark);
            text-decoration: none;
        }
        h1 a:hover {
            text-decoration: dashed underline var(--theme-white) 4px;
            text-underline-offset: 10px;
        }

        nav {
            margin: 5px 0px 5px 0px;
        }

        nav ul {
            list-style-type: none;
            text-align: center;

            font-family: sukacofe;
            font-size: 0.9em;

            margin: 0;
            padding: 5px;

            background-color: var(--page-bg);
        }

        nav li {
            display: inline-block;

            border-radius: 25px;
            padding: 0px 8px 0px 8px;

            border: 2px solid var(--page-bg);
        }

        nav li:hover {
            border: 2px dashed var(--theme-white);
        }

        nav li a {
            font-weight: bold;
            display: block;
            color: var(--theme-white);
            text-align: center;
            padding: 5px 10px 5px 10px;
            /* margin: 5px; */
            text-decoration: none;
        }

        #nav_art {
            background-color: var(--theme-art-dark);
        }

        #nav_ocs {
            background-color: var(--theme-ocs-dark);
        }

        #nav_game {
            background-color: var(--theme-game-dark);
        }

        #nav_rev {
            background-color: var(--theme-rev-dark);
        }

        #nav_misc {
            background-color: var(--theme-misc-dark);
        }
    </style>
    <header>
        <h1><a id="header_link" href="#">sheepydwagon</a></h1>
    </header>
    <nav>
        <ul>
            <li id="nav_art"><a id="nav_art_link" href="#">Art Gallery</a></li>
            <li id="nav_ocs"><a id="nav_ocs_link" href="#">Characters</a></li>
            <li id="nav_game"><a id="nav_game_link" href="#">Gamedev</a></li>
            <li id="nav_rev"><a id="nav_rev_link" href="#">Reviews</a></li>
            <li id="nav_misc"><a id="nav_misc_link" href="#">Misc</a></li>
        </ul>
    </nav>

`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(headerTemplate.content);

        // console.log(this.shadowRoot.getElementById("nav_ocs").getAttribute("href"));

        this.shadowRoot.getElementById("header_link").setAttribute("href", window.absolutePath + "/index.html")

        this.shadowRoot.getElementById("nav_art_link").setAttribute("href", window.absolutePath + "/art.html")
        this.shadowRoot.getElementById("nav_ocs_link").setAttribute("href", window.absolutePath + "/characters.html")
        this.shadowRoot.getElementById("nav_game_link").setAttribute("href", window.absolutePath + "/gamedev.html")
        this.shadowRoot.getElementById("nav_rev_link").setAttribute("href", window.absolutePath + "/reviews.html")
        this.shadowRoot.getElementById("nav_misc_link").setAttribute("href", window.absolutePath + "/misc.html")
    }
}

customElements.define('header-component', Header);

