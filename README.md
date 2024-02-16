# FrontEnd Duxus

FrontEnd para o desafio de Java Da empresa Duxus

O aplicativo foi feito utilizando REACT. O FrontEnd está rodando na porta 3000 e a API está rodando na porta 8080. O Banco de dados utilizado foi o Postgresql e os dados para conexão estão no arquivo application.properties da API. Inicie o projeto do frontend com o comando "npm start" e o projeto do backend com o comando "mvn spring-boot:run".

# Endpoints

Caso realizem testes em clientes HTTP, utilizem os Endpoints:

Cadastrar integrantes - 'http://localhost:8080/duxus/integrante/cadastro'
Cadastrar times - 'http://localhost:8080/duxus/time/cadastro'
Contagem por franquia - 'http://localhost:8080/duxus/time/contagemfranquia'
Contagem por função - 'http://localhost:8080/duxus/time/contagemfuncao'
Franquia mais famosa - 'http://localhost:8080/duxus/time/franquiamaisfamosa'
Função mais comum - 'http://localhost:8080/duxus/time/funcaomaiscomum'
Integrante mais usado - 'http://localhost:8080/duxus/integrante/integrantemaisusado'
Time da data - 'http://localhost:8080/duxus/time/timenadata'
Time mais comum - 'http://localhost:8080/duxus/time/timemaiscomum'

