document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("data.json");
    const data = await res.json();

    // Profile
    document.getElementById("profile-name").textContent = data.profile.name;
    document.getElementById("profile-title").textContent = data.profile.title;

    // Socials
    const socialsContainer = document.querySelector("section > .flex.flex-wrap");
    socialsContainer.innerHTML = "";
    data.socials.forEach(social => {
      const a = document.createElement("a");
      a.href = social.url;
      a.textContent = social.platform;
      a.className = "text-gray-300 hover:text-white underline text-sm";
      a.target = "_blank";
      socialsContainer.appendChild(a);
    });

    // Skills
    const skillsContainer = document.querySelector("#skills .flex.flex-wrap");
    skillsContainer.innerHTML = "";
    data.skills.forEach(skill => {
      const span = document.createElement("span");
      span.className = "px-3 py-1 bg-gray-800 rounded-full text-sm";
      span.textContent = skill;
      skillsContainer.appendChild(span);
    });

    // Projects
    const projectsContainer = document.querySelector("#projects .space-y-4");
    projectsContainer.innerHTML = "";
    data.projects.forEach(project => {
      const div = document.createElement("div");
      div.className = "bg-gray-900 rounded-lg p-4 shadow hover:shadow-xl transition";
      div.innerHTML = `
        <h3 class="text-lg font-semibold">${project.title}</h3>
        <p class="text-gray-400 mt-1 text-sm">${project.description}</p>
        <div class="flex flex-wrap gap-1 mt-2">
          ${project.technologies.map(tech => `<span class="bg-gray-800 px-2 py-1 text-xs rounded">${tech}</span>`).join("")}
        </div>
        <a href="${project.link}" target="_blank" class="inline-block mt-3 text-xs text-blue-400 hover:text-blue-300 underline">
          View Project
        </a>
      `;
      projectsContainer.appendChild(div);
    });

    // Contact
    const contact = document.getElementById("contact-email");
    contact.textContent = data.contact.email;
    contact.href = `mailto:${data.contact.email}`;
    
  } catch (err) {
    console.error("Failed to load data.json:", err);
  }
});
