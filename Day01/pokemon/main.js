// 1. Khai báo bảng màu ngay đầu file
const typeColors = {
  rock: [182, 158, 49],
  ghost: [112, 85, 155],
  steel: [183, 185, 208],
  water: [100, 147, 235],
  grass: [116, 203, 72],
  psychic: [251, 85, 132],
  ice: [154, 214, 223],
  dark: [117, 87, 76],
  fairy: [230, 158, 172],
  normal: [170, 166, 127],
  fighting: [193, 34, 57],
  flying: [168, 145, 236],
  poison: [164, 62, 158],
  ground: [222, 193, 107],
  bug: [167, 183, 35],
  fire: [245, 125, 49],
  electric: [249, 207, 48],
  dragon: [112, 55, 255],
};

// 2. Khai báo hàm hiển thị Card
const renderPokemonCard = (data) => {
  const typeName = data.types[0].type.name;
  // Lấy màu từ typeColors đã khai báo ở trên
  const rgb = typeColors[typeName] || [170, 166, 127];
  const color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

  const pokemonListContainer = document.getElementById("pokemon-list");
  const card = document.createElement("div");
  card.className = "pokemon-card";
  card.style.borderColor = color;

  card.innerHTML = `
        <div class="card-header" style="background-color: ${color}">
            <span class="id">#${data.id.toString().padStart(3, "0")}</span>
        </div>
        <div class="card-body">
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
            <h3 style="color: ${color}">${data.name.toUpperCase()}</h3>
            <span class="type-badge" style="background-color: ${color}">${typeName}</span>
        </div>
    `;
  pokemonListContainer.appendChild(card);
};

// 3. Hàm lấy danh sách từ API
const fetchPokemonList = async () => {
  try {
    // Bước 1: Lấy danh sách 1000 cái tên và URL
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=2000");
    const pokemonArray = res.data.results;

    // Bước 2: Tạo một danh sách các "lời hứa" (Promises)
    // Thay vì đợi từng con, chúng ta tạo ra một mảng các yêu cầu tải chi tiết
    const pokemonPromises = pokemonArray.map((pokemon) =>
      axios.get(pokemon.url),
    );

    // Bước 3: Chạy tất cả các yêu cầu cùng lúc và đợi cho đến khi tất cả xong
    const responses = await Promise.all(pokemonPromises);

    // Bước 4: Sau khi tất cả đã xong, mới bắt đầu vẽ lên màn hình
    responses.forEach((res) => {
      renderPokemonCard(res.data);
    });
  } catch (error) {
    console.error("Lỗi khi tải danh sách:", error);
  }
};

// 4. Chạy hàm khi trang web tải xong
document.addEventListener("DOMContentLoaded", fetchPokemonList);
