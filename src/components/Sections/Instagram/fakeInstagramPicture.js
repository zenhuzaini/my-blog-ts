import { faker } from "@faker-js/faker";

const fakeInstagramPicture = [];
for (let index = 0; index < 6; index++) {
	fakeInstagramPicture.push(faker.image.nature(800, 800, true));
}

export default fakeInstagramPicture;
