function Story({img, username}) {
    return (
        <div>
            <img className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out" src="https://cdn.discordapp.com/avatars/214040003976626176/e82531aa5bd9ce64801138bf500155f8.webp?size=2048" alt="" />
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    )
}

export default Story
