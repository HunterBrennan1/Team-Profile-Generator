import Intern from "../lib/Intern";

describe("Intern", () => {
  const testIntern = {
    name: "Dan",
    id: 103,
    email: "Dan@gmail.com",
    school: "UCB",
    role: "Intern",
  };

  const obj = new Intern(
    testIntern.name,
    testIntern.id,
    testIntern.email,
    testIntern.school
  );

  describe("Constructor", () => {
    it("should create a new construct employee class", () => {
      expect(obj).toEqual({
        name: "Dan",
        id: 103,
        email: "Dan@gmail.com",
        school: "UCB",
        role: "Intern",
      });
    });
  });

  describe("getName", () => {
    it("should return name when getName method is called", () => {
      expect(obj.getName()).toEqual("Dan");
    });
  });

  describe("Id", () => {
    it("should return id when getId method is called", () => {
      expect(obj.getId()).toEqual(103);
    });
  });

  describe("Email", () => {
    it("should return email when getEmail method is called", () => {
      expect(obj.getEmail()).toEqual("Dan@gmail.com");
    });
  });

  describe("School", () => {
    it("should return email when getSchool method is called", () => {
      expect(obj.getSchool()).toEqual("UCB");
    });
  });

  describe("Role", () => {
    it("should return email when getRole method is called", () => {
      expect(obj.getRole()).toEqual("Intern");
    });
  });
});