const { Statement } = require("sqlite3");

// Importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar o objeto que irá fazer operações no banco de dados.
const db = new sqlite3.Database("./src/database/database.db")

// Utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {

  // Com comandos SQL wu vou:

  // 1 - Criar uma tabela
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );
  `)

  // 2 - Inserir dados na tabela
  const query = `
      INSERT INTO places (
        image,
        name,
        address
        address2
        Statement,
        city,
        items
      ) VALUES (?,?,?,?,?,?,?);
    `
  db.run(query)

  // 3 - Consultar os dados da tabela

  // 4 - Deletar um dado da tabela
})