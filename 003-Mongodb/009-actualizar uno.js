db.clientes.updateOne(
    {nombre:'Jose Vicente'},
    {
        $set:
        {email:"jocarsa2@gmail.com"}
    }
)