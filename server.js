const express = require(`express`)
const app = express()
const port = 8080

let routes = [
    { prefix: `/siswa`, route: require(`./routes/siswa`)},
   { prefix: `/user`, route: require(`./routes/user`)}
]

for (let i = 0; i < routes.length; i++) {
    app.use(routes[i].prefix, routes[i].route)
}

app.listen(port, ()=> {
    console.log(`server run on port ${port}`);
})