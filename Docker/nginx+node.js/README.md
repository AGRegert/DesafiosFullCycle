Configuração inicial do "Desafio Nginx com Node.js" do curso "Full Cycle 3.0 > Docker".

A ideia é executar o comando:

docker compose up

E instanciar as 3 imagens que serão configuradas: db, app e nginx. Apenas a imagem nginx terá a porta 8080 exposta. 

A implementação atual contém a configuração para as imagens db e a app. Após executar o docker compose up, é possível ver o resultado abrindo o navegador em http://localhost:8080
