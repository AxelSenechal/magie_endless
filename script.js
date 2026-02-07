const svg = document.getElementById("magic-map");
const infoPanel = document.getElementById("info-panel");

const CENTER = { x: 0, y: 0 };
const RADIUS_STEP = 120;
const NODE_RADIUS = 22;

const schoolMap = {};
schools.forEach(s => schoolMap[s.id] = s);

// Regrouper par cercle
const circles = {};
schools.forEach(s => {
  if (!circles[s.circle]) circles[s.circle] = [];
  circles[s.circle].push(s);
});

// Dessiner les cercles de fond
Object.keys(circles).forEach(circle => {
  const r = circle * RADIUS_STEP;
  const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", CENTER.x);
  c.setAttribute("cy", CENTER.y);
  c.setAttribute("r", r);
  c.setAttribute("fill", "none");
  c.setAttribute("stroke", "#d7d6e2");
  c.setAttribute("stroke-dasharray", "4 4");
  svg.appendChild(c);
});

// Calculer les positions
schools.forEach(school => {
  const list = circles[school.circle];
  const index = list.indexOf(school);
  const angle = (2 * Math.PI / list.length) * index;

  school.x = CENTER.x + Math.cos(angle) * school.circle * RADIUS_STEP;
  school.y = CENTER.y + Math.sin(angle) * school.circle * RADIUS_STEP;
  school.angle = angle; // Stocker l’angle pour les écoles transcendantales
  console.log(`Position initiale de ${school.name} : (${school.x.toFixed(2)}, ${school.y.toFixed(2)}) angle: ${angle.toFixed(2)} rad`);
});

// Ajuster la position des écoles transcendantales et sublimées
schools.forEach(school => {
  if (
    (school.type === "transcendantale" || school.type === "sublimation")
  ) {
    let sumX = 0;
    let sumY = 0;


    school.parents.forEach(parentId => {
      const parent = schoolMap[parentId];
      if (parent && typeof parent.angle === "number") {
        sumX += Math.cos(parent.angle);
        sumY += Math.sin(parent.angle);
      }
    });


        const avgAngle = Math.atan2(sumY, sumX);
        school.angle = avgAngle;
     

    

    // Position finale (quoi qu’il arrive)
    school.x = CENTER.x + Math.cos(school.angle) * school.circle * RADIUS_STEP;
    school.y = CENTER.y + Math.sin(school.angle) * school.circle * RADIUS_STEP;
    school.angle = school.angle; // Stocker l’angle pour les écoles transcendantales
  }
});




// Dessiner les liens
schools.forEach(school => {
  school.parents.forEach(parentId => {
    const parent = schoolMap[parentId];
    if (!parent) return;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", parent.x);
    line.setAttribute("y1", parent.y);
    line.setAttribute("x2", school.x);
    line.setAttribute("y2", school.y);
    line.setAttribute("class", `link ${school.type}`);
    svg.appendChild(line);
  });
});

// Dessiner les écoles
schools.forEach(school => {
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttribute("class", "school-node");
  g.setAttribute("transform", `translate(${school.x}, ${school.y})`);

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("r", NODE_RADIUS);
  circle.setAttribute("fill", "#3a6ea5");

  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("y", 4);
  text.setAttribute("class", "school-label");
  text.textContent = school.name;

  g.appendChild(circle);
  g.appendChild(text);

  g.addEventListener("click", () => showInfo(school));

  svg.appendChild(g);
});

function showInfo(school) {
  infoPanel.innerHTML = `
    <h2>${school.name}</h2>
    <p><strong>Cercle :</strong> ${school.circle}</p>
    <p><strong>Type :</strong> ${school.type}</p>
    <p><strong>Parents :</strong> ${school.parents.length ? school.parents.join(", ") : "Aucun"}</p>
    <p><strong>Description :</strong><br>${school.description}</p>
    <p><strong>Bonus magique :</strong> ${school.bonus}</p>
    <p><strong>Talents magiques :</strong></p>
    <ul>
      ${school.talents.map(t => `<li>${t}</li>`).join("")}
    </ul>
  `;
}
