// class UserMethod {
//   skills: string[];

//   allSkill(skills: string | string[]): void {
//     this.skills = []
//     if (Array.isArray(skills)) {
//       this.skills = skills.concat(this.skills);
//     }else {
//       this.skills.push(skills);
//     }
//   }
// }

// const userMethod = new UserMethod();

// userMethod.allSkill('css');
// userMethod.allSkill(['js', 'ts']);

//-------------------------------------//

class UserMethod {
  skills: string[];

  addSkill(skill: string): void;
  addSkill(skills: string[]): void;
  addSkill(skillOfSkills: string | string[]): void {
    if (typeof skillOfSkills === 'string') {
      this.skills.push(skillOfSkills);
    } else {
      this.skills.concat(...skillOfSkills);
    }
  }
}

new UserMethod().addSkill('css');

//--------------------------------------//

function run(distance: number): number;
function run(distance: string): string;
function run(distance: number | string): number | string {
  if (typeof distance === 'number') {
    return distance * 2;
  } else {
    return distance.charAt(0).toLowerCase() + distance.slice(1);
  }
}
