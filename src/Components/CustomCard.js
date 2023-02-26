import { Card } from 'antd';
const { Meta } = Card;
const CustomCard = (props) => (
  <Card
    hoverable
    style={{ maxWidth: '100%' }}
    cover={<img alt="Our Events" src={props.url}  height='205' style={{ objectFit: 'cover' }}/>}
  >
    <Meta title={props.title} description={props.description} />
  </Card>
);
export default CustomCard;