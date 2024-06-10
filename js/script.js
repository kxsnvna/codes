//https://magnus-backend.uz/api/docs#/Product/ProductController_findMany

const search = (s) => {
  const productsCode = document.querySelector("#products");
  productsCode.innerHTML = "loading ....";

  axios
    .post("https://magnus-backend.uz/api/product/find-many", {
      take: 100,
      select: { id: true, nameRu: true, nameUz: true, category: true },
      where: {
        AND: [
          {
            status: "Active",
          },
          {
            OR: [
              {
                nameUz: {
                  contains: s,
                  mode: "insensitive",
                },
              },
              {
                nameRu: {
                  contains: s,
                  mode: "insensitive",
                },
              },
            ],
          },
        ],
      },
      // include: {
      //   category: true,
      // },
    })
    .then((res) => {
      console.log(res.data);
      productsCode.innerHTML = JSON.stringify(res.data, undefined, 2);
    })
    .catch((e) => {
      console.log(e);
      productsCode.innerHTML = "error ....";
    });
};

search("Удлинитель");

const PriceLow = () => {
  const PriceLow = document.querySelector("#PriceLow");
  PriceLow.innerHTML = "loading ....";

  axios
    .post("https://magnus-backend.uz/api/product/find-many", {
      orderBy: { price: "asc" },
      skip: 470,
      take: 50,
      select: { price: true },
    })
    .then((res) => {
      console.log(res.data);
      PriceLow.innerHTML = JSON.stringify(res.data, undefined, 2);
    })
    .catch((e) => {
      console.log(e);
      PriceLow.innerHTML = "error ....";
    });
};
const PriceTall = () => {
  const PriceTall = document.querySelector("#PriceTall");
  PriceTall.innerHTML = "loading ....";

  axios
    .post("https://magnus-backend.uz/api/product/find-many", {
      orderBy: { price: "desc" },
      skip: 470,
      take: 50,
      select: { price: true },
    })
    .then((res) => {
      console.log(res.data);
      PriceTall.innerHTML = JSON.stringify(res.data, undefined, 2);
    })
    .catch((e) => {
      console.log(e);
      PriceTall.innerHTML = "error ....";
    });
};

const priceTall = () => {
  const PriceTall = document.querySelector("#PriceTall");
  PriceTall.innerHTML = "loading ....";

  axios
    .post("https://magnus-backend.uz/api/product/find-many", {
      orderBy: { id: "desc" },
      skip: 470,
      take: 50,
      select: { id: true },
    })
    .then((res) => {
      console.log(res.data.data);
      idTall.innerHTML = JSON.stringify(res.data, undefined, 2);
    })
    .catch((e) => {
      console.log(e);
      idTall.innerHTML = "error ....";
    });
};
