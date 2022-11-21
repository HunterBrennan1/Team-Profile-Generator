import Engineer from "../lib/Engineer";

describe("Engineer", () => {
  const testEngineer = {
    name: "Nick",
    id: 102,
    email: "Nick@gmail.com",
    github: "Nick1",
    role: "Engineer",
  };

  const obj = new Engineer(
    testEngineer.name,
    testEngineer.id,
    testEngineer.email,
    testEngineer.github
  );

  describe("Constructor", () => {
    it("should create a new construct employee class", () => {
      expect(obj).toEqual({
        name: "Nick",
        id: 102,
        email: "Nick@gmail.com",
        github: "Nick1",
        role: "Engineer",
      });
    });
  });

  describe("getName", () => {
    it("should return name when getName method is called", () => {
      expect(obj.getName()).toEqual("Nick");
    });
  });

  describe("Id", () => {
    it("should return id when getId method is called", () => {
      expect(obj.getId()).toEqual(102);
    });
  });

  describe("Email", () => {
    it("should return email when getEmail method is called", () => {
      expect(obj.getEmail()).toEqual("Nick@gmail.com");
    });
  });

  describe("GitHub", () => {
    it("should return email when getGithub method is called", () => {
      expect(obj.getGithub()).toEqual("Nick1");
    });
  });

  describe("Role", () => {
    it("should return email when getRole method is called", () => {
      expect(obj.getRole()).toEqual("Engineer");
    });
  });
});