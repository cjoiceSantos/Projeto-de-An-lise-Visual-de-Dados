const data = [
  {
    qtd: 3,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "15 a 19 anos",
    inicio: "2020-02-13T04:54:56.000Z",
  },
  {
    qtd: 3,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "20 a 29 anos",
    inicio: "2020-02-13T05:15:43.000Z",
  },
  {
    qtd: 4,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "30 a 39 anos",
    inicio: "2020-02-18T09:38:54.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "40 a 49 anos",
    inicio: "2020-02-28T10:04:59.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "50 a 59 anos",
    inicio: "2020-02-29T09:22:59.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 5 e 10 vezes",
    idade: "15 a 19 anos",
    inicio: "2020-02-06T05:42:48.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 5 e 10 vezes",
    idade: "30 a 39 anos",
    inicio: "2020-02-21T10:40:40.000Z",
  },
  {
    qtd: 9,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "15 a 19 anos",
    inicio: "2020-02-13T04:51:28.000Z",
  },
  {
    qtd: 9,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "20 a 29 anos",
    inicio: "2020-02-18T12:03:39.000Z",
  },
  {
    qtd: 17,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "30 a 39 anos",
    inicio: "2020-02-13T05:14:41.000Z",
  },
  {
    qtd: 5,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "40 a 49 anos",
    inicio: "2020-02-18T09:22:58.000Z",
  },
  {
    qtd: 3,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "50 a 59 anos",
    inicio: "2020-02-18T11:10:13.000Z",
  },
  {
    qtd: 2,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "60 a 69 anos",
    inicio: "2020-02-19T08:31:32.000Z",
  },
  {
    qtd: 4,
    intervalo_visitas: "Mais de 10 vezes",
    idade: "20 a 29 anos",
    inicio: "2020-02-13T05:14:45.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Mais de 10 vezes",
    idade: "30 a 39 anos",
    inicio: "2020-02-05T15:36:21.000Z",
  },
  {
    qtd: 2,
    intervalo_visitas: "Mais de 10 vezes",
    idade: "40 a 49 anos",
    inicio: "2020-02-04T13:18:19.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "15 a 19 anos",
    inicio: "2020-03-05T11:02:14.000Z",
  },
  {
    qtd: 5,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "30 a 39 anos",
    inicio: "2020-03-04T11:22:19.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "50 a 59 anos",
    inicio: "2020-03-05T05:31:16.000Z",
  },
  {
    qtd: 2,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "15 a 19 anos",
    inicio: "2020-03-06T05:22:37.000Z",
  },
  {
    qtd: 2,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "20 a 29 anos",
    inicio: "2020-03-03T09:52:07.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "30 a 39 anos",
    inicio: "2020-03-05T12:01:07.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "40 a 49 anos",
    inicio: "2020-03-06T09:15:24.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "50 a 59 anos",
    inicio: "2020-03-04T08:28:20.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "15 a 19 anos",
    inicio: "2020-09-25T14:29:02.000Z",
  },
  {
    qtd: 5,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "20 a 29 anos",
    inicio: "2020-09-25T11:21:53.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "30 a 39 anos",
    inicio: "2020-09-28T06:30:26.000Z",
  },
  {
    qtd: 3,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "40 a 49 anos",
    inicio: "2020-09-25T13:41:53.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "60 a 69 anos",
    inicio: "2020-09-26T04:00:03.000Z",
  },
  {
    qtd: 2,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "Maior que 69 anos",
    inicio: "2020-09-25T13:30:12.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 5 e 10 vezes",
    idade: "20 a 29 anos",
    inicio: "2020-09-25T13:41:04.000Z",
  },
  {
    qtd: 2,
    intervalo_visitas: "Entre 5 e 10 vezes",
    idade: "30 a 39 anos",
    inicio: "2020-09-25T13:35:19.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 5 e 10 vezes",
    idade: "40 a 49 anos",
    inicio: "2020-09-30T05:18:20.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 5 e 10 vezes",
    idade: "50 a 59 anos",
    inicio: "2020-09-28T07:50:33.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 5 e 10 vezes",
    idade: "60 a 69 anos",
    inicio: "2020-09-25T11:19:26.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 5 e 10 vezes",
    idade: "Maior que 69 anos",
    inicio: "2020-09-25T11:21:00.000Z",
  },
  {
    qtd: 6,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "10 a 14 anos",
    inicio: "2020-09-25T13:22:58.000Z",
  },
  {
    qtd: 8,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "15 a 19 anos",
    inicio: "2020-09-25T11:23:17.000Z",
  },
  {
    qtd: 8,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "20 a 29 anos",
    inicio: "2020-09-25T13:37:28.000Z",
  },
  {
    qtd: 4,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "30 a 39 anos",
    inicio: "2020-09-25T13:23:08.000Z",
  },
  {
    qtd: 6,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "40 a 49 anos",
    inicio: "2020-09-25T11:22:37.000Z",
  },
  {
    qtd: 4,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "50 a 59 anos",
    inicio: "2020-09-25T13:44:10.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "60 a 69 anos",
    inicio: "2020-09-25T11:20:14.000Z",
  },
  {
    qtd: 3,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "Maior que 69 anos",
    inicio: "2020-09-26T05:23:03.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Mais de 10 vezes",
    idade: "30 a 39 anos",
    inicio: "2020-09-26T04:26:26.000Z",
  },
  {
    qtd: 3,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "20 a 29 anos",
    inicio: "2020-10-02T11:38:46.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "30 a 39 anos",
    inicio: "2020-10-17T15:40:41.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Entre 2 e 5 vezes",
    idade: "40 a 49 anos",
    inicio: "2020-10-03T06:47:19.000Z",
  },
  {
    qtd: 2,
    intervalo_visitas: "Entre 5 e 10 vezes",
    idade: "30 a 39 anos",
    inicio: "2020-10-11T07:07:45.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "10 a 14 anos",
    inicio: "2020-10-07T12:21:43.000Z",
  },
  {
    qtd: 2,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "15 a 19 anos",
    inicio: "2020-10-11T04:53:03.000Z",
  },
  {
    qtd: 4,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "20 a 29 anos",
    inicio: "2020-10-02T11:20:56.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "30 a 39 anos",
    inicio: "2020-10-02T11:25:35.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "40 a 49 anos",
    inicio: "2020-10-02T12:24:23.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "50 a 59 anos",
    inicio: "2020-10-02T13:56:33.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Esta é a primeira vez",
    idade: "Maior que 69 anos",
    inicio: "2020-10-09T13:40:22.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Mais de 10 vezes",
    idade: "10 a 14 anos",
    inicio: "2020-10-02T11:24:28.000Z",
  },
  {
    qtd: 1,
    intervalo_visitas: "Mais de 10 vezes",
    idade: "20 a 29 anos",
    inicio: "2020-10-02T11:22:18.000Z",
  },
];

function sanitizeData(occurrence) {
  if (!occurrence) {
    throw new Error("occurrence is required!");
  }

  const dataToBeSanitized = data;
  const dataGroupedByOccurence = dataToBeSanitized.filter(
    (el) => el.intervalo_visitas === occurrence
  );

  const result = [];

  for (const item of dataGroupedByOccurence) {
    result.push({
      idade: item.idade,
      qtd: item.qtd,
      mes_reposta: new Date(item.inicio).getMonth() + 1,
      date: item.inicio,
    });
  }

  let groupedByAge = [];

  for (const item of result) {
    const selectedAge = item.idade;
    const ageAlreadyExists = groupedByAge.findIndex(
      (el) => el.idade === selectedAge
    );

    if (ageAlreadyExists === -1) {
      const payload = {
        idade: selectedAge,
        data: [
          {
            qtd: item.qtd,
            mes_resposta: item.mes_reposta,
          },
        ],
      };
      groupedByAge.push(payload);

      continue;
    }

    groupedByAge[ageAlreadyExists].data = [
      ...groupedByAge[ageAlreadyExists].data,
      {
        qtd: item.qtd,
        mes_resposta: item.mes_reposta,
      },
    ];

    groupedByAge[ageAlreadyExists].data.sort((a, b) => {
      return a.mes_resposta - b.mes_resposta;
    });
  }

  for (const item of groupedByAge) {
    console.log(item.data.length);
    if (item.data.length < 4) {
      const range = item.data.length;
      for (let index = 0; index < 4 - range; index++) {
        item.data.push(0);
      }
    }
  }

  return groupedByAge;
}
