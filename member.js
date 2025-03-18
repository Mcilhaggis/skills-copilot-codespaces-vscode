function skillsMember() {
  const skills = document.querySelectorAll('.skill');
  const skillsArray = Array.from(skills);

  skillsArray.forEach((skill) => {
    const skillValue = skill.dataset.skill;
    skill.style.width = `${skillValue}%`;
  });
}