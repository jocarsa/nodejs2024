db.clientes.updateMany(
    {nombre:'Jose Vicente'},
    {
        $set:
        {email:"info@josevicentecarratala.com"}
    }
)