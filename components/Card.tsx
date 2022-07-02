import { Card, Col, Text } from "@nextui-org/react";

export const StyledCard = ({ heading, description, image }: { heading: string, description: string, image: string }) => (
  <Card style={{ width: '100%', height: '100%' }} >
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          {heading}
        </Text>
        <Text h4 color="white">
          {description}
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src={image}
      objectFit="cover"
      width="100%"
      height="100%"
      alt="Card image background"
    />
  </Card>
)