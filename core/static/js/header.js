function header() {
   const header = document.getElementById("header-main")
   header.innerHTML =
   `
   <nav id="nav-main">
            <ul id="menu-nav-principal">
                <li>
                    <a href="#">SOBRE NÓS</a>
                </li>
                <li>
                    <a href="programas">PROGRAMAS</a>
                    <ul>
                        <li><a href="#">MIND THE BIZZ</a></li>
                        <li><a href="#">INCUBAÇÃO</a></li>
                        <li><a href="#">ACELERAÇÃO DE EMPREENDIMENTOS RURAIS</a></li>
                        <li><a href="#">OPEN INOVATIONS LABS</a></li>
                        <li><a href="#">LED</a></li>
                    </ul>
                </li>
                <li >
                    <a href="#">HUB</a>
                </li>
                <li>
                    <a href="agenda">AGENDA</a>
                    <ul>
                        <li><a href="#">CALENDÁRIO DO ARMAZÉM</a></li>
                        <li><a href="#">CALENDÁRIO DOS PARCEIROS</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">CORPORATES</a>
                </li>
                <li>
                    <a href="startups">STARTUPS</a>
                    <ul>
                        <li><a href="#">CONTADOR</a></li>
                        <li><a href="#">LOCALIZAÇÃO</a></li>
                        <li><a href="startups">LISTA DAS STARTUPS</a></li>
                        <li><a href="#">CADASTRO DE NOVAS FEATURES</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">BLOG ARMAZÉM</a>
                </li>
                </ul>            
            <div class="logo-main">
                <div class="logo">
                    <a href="/">
                    <img src="static/img-logo-paleta-cores-icons/Logo_ACC_Mono_Branca.png" height="100%" width="130px" alt="logo-armazem">
                    </a>

                </div>
            </div>
       </nav>
   `
}