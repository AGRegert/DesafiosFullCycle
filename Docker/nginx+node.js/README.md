Configuração inicial do "Desafio Nginx com Node.js" do curso "Full Cycle 3.0 > Docker".

A ideia é executar o comando:

docker compose up

E instanciar as 3 imagens que serão configuradas: db, app e nginx. Apenas a imagem nginx terá a porta 80 exposta. 

A implementação atual apenas contém a configuração para a db. Após executar o docker compose up, é necessário executar em modo iterativo o script /root/initdb.sh para popular as tabelas utilizadas pelo app.
