#Projeto Armazém Da Criatividade
Grupo: Devs of War <br> 
Universidade Tiradentes Residência 2021.1 <br>
Integrantes:
* Alexandre Fonseca
* Caio Ferraz
* Caio Marzuca
* Gabriel Milanez  
* Givaldo Santos
* Jehmes Thales
* Johnes Thomas
* Leandro Antônio
* Leandro Miguel
* Marcio Danilo

##Como executar o programa
###Execução Local
Requisitos:
* Python 3.9.5+ (Qualquer versão acima da 3.0 deve funcionar mais apenas o 3.9.5 foi testado)
* PIP (Instalado junto com o python)

Dependências:
* django
* django-heroku

Dependências podem ser instaladas através do PIP, usando os seguintes comandos no CMD/Powershell/Bash:
> pip install django <br>
> pip install django-heroku

Em seguida baixe o repositório do GitHub na branch 'main', você pode fazer o clone <br> 
ou baixar o arquivo .zip clicando no botão 'Code' e depois em 'Download as ZIP'. <br>
Após baixar navegue até a pasta raiz do projeto (a pasta que contém o README) no <br> 
CMD/Powershell/Bash e execute o script manage.py com o comando:
> python manage.py migrate

Esse comando so precisa ser executado a primeira vez que você executar o projeto! <br>
Agora, para executar o projeto use o seguinte comando:
> python manage.py runserver

Pronto! Se tudo correu certo o terminal deve exibir uma mensagem como essa exibida abaixo:
> Watching for file changes with StatReloader <br>
> Performing system checks... <br>
> System check identified no issues (0 silenced). <br>
> June 10, 2021 - 21:19:30 <br>
> Django version 3.2.3, using settings 'ArmazemDaCriatividade.settings' <br>
> Starting development server at http://127.0.0.1:8000/ <br>
> Quit the server with CTRL-BREAK. <br>

O endereço HTTP informado no terminal é o que você vai precisar acessar para visualizar o site.
###Heroku
Para acessar o projeto pelo Heroku é so acessar o endereço: https://dev-adc.herokuapp.com/ <br>
Ele está atualizado de acordo com a última versão do repositório do GitHub na branch main.
