const Header = () => {
    return (
        <header className="flex items-center justify-between px-15 py-4 bg-blue-600">
        <div>
            <input type="text" placeholder="Digite o nome do produto" className="w-120 h-10 rounded bg-white px-4"/>   
        </div>

        <div>
            <select className="h-10 rounded bg-white px-4">
                <option selected disabled>Filtrar produtos</option>
                <option>all</option>
                <option>men's clothing</option>
                <option>women's clothing</option>
                <option>electronics</option>
                <option>jewelery</option>
            </select>
            
            <select className="h-10 rounded bg-white px-4">
                <option selected disabled>Ordenar produtos</option>
                <option value="preco">Ordenar por preço</option>
                <option value="nota">Ordernar por avaliação</option>
            </select>
        </div>
    </header>
    )
}