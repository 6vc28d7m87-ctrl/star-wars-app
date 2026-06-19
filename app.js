async function addItem() {
  const title = document.getElementById("title").value;
  const era = document.getElementById("era").value;

  if (!title) return;

  await addData({ title, era, created: Date.now() });

  document.getElementById("title").value = "";
  document.getElementById("era").value = "";

  load();
}

async function load() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  const items = await getAllData();

  items.reverse().forEach(i => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = `${i.title} (${i.era})`;
    list.appendChild(div);
  });
}

load();