import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Section,
  Text,
  Tailwind,
  pixelBasedPreset,
  Row,
  Font,
  Button,
} from '@react-email/components';

const baseUrl = process.env.URL ? `https://${process.env.URL}` : '';

export const RobotaEmailSignature = () => (
  <Html lang="cs">
    <Head>
      <Font
        fontFamily="Aptly"
        fallbackFontFamily={['Arial', 'Helvetica', 'sans-serif']}
        webFont={{
          url: `${baseUrl}/static/Aptly-MediumItalic.woff2`,
          format: 'woff2',
        }}
        fontWeight={500}
        fontStyle="italic"
      />
    </Head>
    <Body>
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Container className="bg-[white] px-3">
          <Section>
            <Img
              src={`${baseUrl}/static/robota-logo.png`}
              alt="Robota"
              width="247"
              height="130"
            />
          </Section>
          <Hr />
          <Section>
            <Row className="mb-4">
              <Text className="italic font-[Aptly] text-xl font-medium my-0">
                Vojtěch Janošík
              </Text>
              <Text className="my-0 leading-[20px] font-[Arial,_Helvetica,_sans-serif]">
                Grafický a digitální design
              </Text>
            </Row>
            <Row>
              <Text className="my-0 leading-[20px] font-[Arial,_Helvetica,_sans-serif]">
                +420 734 481 783
              </Text>
              <Text className="my-0 leading-[20px] font-[Arial,_Helvetica,_sans-serif]">
                janosikvoj@gmail.com
              </Text>
            </Row>
          </Section>
          <Hr />
          <Section>
            <Button
              className="p-2"
              href="https://www.instagram.com/robota_zlin"
              target="_blank"
            >
              <Img
                src={`${baseUrl}/static/instagram.png`}
                alt="Instagram"
                width={180 / 8}
                height={180 / 8}
              />
            </Button>
            <Button
              className="p-2"
              href="https://www.facebook.com/robotazlin/"
              target="_blank"
            >
              <Img
                src={`${baseUrl}/static/facebook.png`}
                alt="Facebook"
                width={180 / 8}
                height={180 / 8}
              />
            </Button>
            <Button
              className="p-2"
              href="https://robota.utb.cz/"
              target="_blank"
            >
              <Img
                src={`${baseUrl}/static/web.png`}
                alt="Website"
                width={180 / 8}
                height={180 / 8}
              />
            </Button>
          </Section>
        </Container>
      </Tailwind>
    </Body>
  </Html>
);

export default RobotaEmailSignature;
