import mocker from 'mocker-data-generator';
type Props = {
  getTemplate: () => object;
};
export const parseTemplate = async (path: string) => {
  const { getTemplate } = require(path) as Props;
  console.log(path, getTemplate);
  const template = getTemplate();
  const data = await mocker()
    .schema('template', template, 1)
    .build()
    .then((data) => data['template'][0]);
  console.log('data', data);
  return data;
};
