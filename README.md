---API ELOGIOS---

Api desenvolvida utilizando as tecnologias Nodejs, typescript, express

Banco de dados: sqlite
ORM: typeorm

Rotas dísponíveis
- POST "/users" (cadastro usuário) 
- POST "/auth" (gera token jwt)
- POST "/tags" (cadastro tags, apenas usuários autenticados/admin)
- POST "/compliments" (cadastro elogios, apenas usuários autenticados)
- GET "/users" (lista usuários)
- GET "/tags" (lista tags)
- GET "/users/compliments/send" (lista de elogios do usuário logado, que foram enviados a outros usuários. Necessário autenticação)
- GET "/users/compliments/receive" (lista de elogios do usuário logado, que foram recebidos de outros usuários. Necessário autenticação)


