const universities = [
  {
    name: 'Universidade de Minas Gerais',
    acronym: 'UFM',
    overallGrade: null,
    address: {
      street: 'Rua Da Universidade MG',
      number: 1170,
      city: 'Belo Horizonte',
      state: 'MG',
      country: 'Brazil'
    },
    courses: [
      {
        course: 'Engineering',
        grade: 3,
        campus: 'City',
        duration: 4,
        mode: 'Full time',
        entryGrade: 770,
      },
      {
        course: 'Computer Science',
        grade: 4,
        campus: 'City',
        duration: 3.5,
        mode: 'Full time',
        entryGrade: 750,
      },
      {
        course: 'Ancient History',
        grade: 2,
        campus: 'City',
        duration: 7,
        mode: 'Part time',
        entryGrade: 600,
      },
    ],
  },
  {
    name: 'Universidade de São Paulo',
    acronym: 'UFSP',
    overallGrade: null,
    address: {
      street: 'Rua Da Universidade SSPU',
      number: 482,
      city: 'São Paulo',
      state: 'SP',
      country: 'Brazil'
    },
    courses: [
      {
        course: 'Engineering',
        grade: 4,
        campus: 'City-1',
        duration: 4,
        mode: 'Full time',
        entryGrade: 800,
      },
      {
        course: 'Computer Science',
        grade: 3,
        campus: 'City-2',
        duration: 3.5,
        mode: 'Full time',
        entryGrade: 710,
      },
      {
        course: 'Ancient History',
        grade: 4,
        campus: 'City-2',
        duration: 8,
        mode: 'Part time',
        entryGrade: 700,
      },
      {
        course: 'Business',
        grade: 4,
        campus: 'City-1',
        duration: 3,
        mode: 'Full time',
        entryGrade: 743,
      },
      {
        course: 'Medicine',
        grade: 5,
        campus: 'Health',
        duration: 5.5,
        mode: 'Full time',
        entryGrade: 835,
      },
    ],
  },
  {
    name: 'Universidade de Palmas',
    acronym: 'UTO',
    overallGrade: null,
    address: {
      street: 'Rua Da Universidade TOUF',
      number: 777,
      city: 'Tocantins',
      state: 'TO',
      country: 'Brazil'
    },
    courses: [
      {
        course: 'Medicine',
        grade: 2.5,
        campus: 'Health+',
        duration: 6,
        mode: 'Full time',
        entryGrade: 710,
      },
      {
        course: 'Computer Science',
        grade: 2,
        campus: 'City',
        duration: 4,
        mode: 'Full time',
        entryGrade: 468,
      },
    ],
  },
  {
    name: 'Universidade Nova São Paulo',
    acronym: 'UNSP',
    overallGrade: null,
    address: {
      street: 'Rua Da Nova Global',
      number: 653,
      city: 'São Paulo',
      state: 'SP',
      country: 'Brazil'
    },
    courses: [
      {
        course: 'Art History',
        grade: 3,
        campus: 'City',
        duration: 3,
        mode: 'Full time',
        entryGrade: 496,
      },
      {
        course: 'Computer Science',
        grade: 2,
        campus: 'City',
        duration: 3.5,
        mode: 'Full time',
        entryGrade: 517,
      },
      {
        course: 'Public Policy',
        grade: 4,
        campus: 'City',
        duration: 6.5,
        mode: 'Part time',
        entryGrade: 580,
      },
    ],
  },
  {
    name: 'Exvort University',
    acronym: 'ExUn',
    overallGrade: null,
    address: {
      street: 'New York Street',
      number: 120,
      city: 'Boston',
      state: 'MA',
      country: 'USA'
    },
    courses: [
      {
        course: 'Art History',
        grade: 5,
        campus: 'City',
        duration: 4,
        mode: 'Full time',
        entryGrade: 760,
      },
    ],
  },
];

// exercicio 1
const namesOfUniversities = (
  universities
    .map((university) => university.name)
    .sort()
);

// ex 2

const addressOfUniversitives = (
  universities
    .map((universities) => {
      const name = universities.name;
      const street = universities.address.street;
      const number = universities.address.number;
      const city = universities.address.city;
      const state = universities.address.state;
      const country = universities.address.country;
      return `${name}: ${street}, nº ${number}, ${city}, ${state}, ${country}.`;
    })
);

// ex 3

const acronymAndCity = (
  universities
    .filter(university => university.address.country === 'Brazil')
    .map(uni => `${uni.acronym}: ${uni.address.city}`)
);

// ex 4

const uniInfo = (
  universities
    .map((university) => {
      const differentCampusArray = (
        university.courses
          .reduce((start, course) => {
            if (start.includes(course.campus)) {
              return start;
            }
            start.push(course.campus);
            return start;
          }, [])
      )
      const differentCampus = differentCampusArray.length;
      return {
        name: university.name,
        acronym: university.acronym,
        courses: university.courses.length,
        differentCampus,
      }
    })
);

const products = [
  { name: "Desinfetante Veja", price: 10, barCode: 98293489238, quantity: 1},
  { name: "Ketchup Hellmann's", price: 8, barCode: 585122289238, quantity: 4},
  { name: "Milho Enlatado Zero-Six", price: 6, barCode: 56862359487, quantity: 6},
  { name: "Cereal Nescal Ball", price: 20, barCode: 19732584692, quantity: 2},
  { name: "Biscoito Trakinas", price: 5, barCode: 16749583215, quantity: 1},
];

// ex 5

const totalAmount = (
  products
    .reduce((start, product) => start + (product.price * product.quantity), 0)
);

// ex 6

const discountApplied = (
  products
    .map((product) => {
      let discount = false;

      if (product.quantity >= 4) {
        discount = true;
      };

      return {
        name: product.name,
        discount,
      }
    })
);

// ex 7

const baseObj = {
  products: [],
  items: 0,
  amountPaid: 0,
}

const productsBought = (
  products
    .reduce((start, product) => {
      start.products.push(product.name);
      start.items += product.quantity;
      start.amountPaid += (product.price * product.quantity);
      return start;
    }, baseObj)
)

productsBought.products.sort();

// bonus 1

const uniWithGrade = (
  universities
    .map((uni) => {
      const name = uni.name;
      const country = uni.address.country;
      const sumOfGrade = uni.courses.reduce((start, course) => start + course.grade, 0);
      const overallGrade = sumOfGrade / uni.courses.length;

      return {
        name,
        country,
        overallGrade,
      };
    })
);

// bonus 2

const allBrazilianCourses = (
  universities
    .filter((uni) => uni.address.country === 'Brazil')
    .reduce((start, uni) => {
      uni.courses
        .reduce((initial, course) => {
          course.name = uni.name;
          initial.push(course);
          return initial;
        }, start);

      return start;
    } ,[])
)

// bonus 3

const baseObj2 = {
  country: 'Brazil',
  avgGrade: 0,
  avgDuration: 0,
  highestEntryGrade: 0
}

const uniOverview = (
  allBrazilianCourses
    .reduce((start, course, index, array) => {
      start.avgGrade += course.grade;
      start.avgDuration += course.duration;

      if (start.highestEntryGrade < course.entryGrade) {
        start.highestEntryGrade = course.entryGrade;
      }

      if (index === array.length - 1) {
        start.avgGrade /= array.length;
        start.avgDuration /= array.length;
      }

      return start;
    }, baseObj2)
)

console.log(uniOverview)