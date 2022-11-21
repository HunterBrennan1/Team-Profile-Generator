import Manager from "../lib/Manager";

describe("Manager", () => {
  const testManager = {
    name: "Mark",
    id: 103,
    email: "Mark@gmail.com",
    officeNumber: 3027,
  };

  const obj = new Manager(
    testManager.name,
    testManager.id,
    testManager.email,
    testManager.officeNumber
  );

  describe("Constructor", () => {
    it("should create a new construct employee class", () => {
      expect(typeof obj).toEqual("object");
    });
  });

  describe("getName", () => {
    it("should return name when getName method is called", () => {
      expect(obj.getName()).toEqual("Mark");
    });
  });

  describe("Id", () => {
    it("should return id when getId method is called", () => {
      expect(obj.getId()).toEqual(103);
    });
  });

  describe("Email", () => {
    it("should return email when getEmail method is called", () => {
      expect(obj.getEmail()).toEqual("Mark@gmail.com");
    });
  });

  describe("OfficeNumber", () => {
    it("should return email when getOfficeNumber method is called", () => {
      expect(obj.getOfficeNumber()).toEqual(3027);
    });
  });

  describe("Role", () => {
    it("should return email when getRole method is called", () => {
      expect(obj.getRole()).toEqual("Manager");
    });
  });
});