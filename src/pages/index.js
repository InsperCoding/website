import DefaultOverlayContent from '../components/DefaultOverlayContent';
import { Container } from '../styles/indexStyles';
import { ModelsWrapper, ModelSection, IndexModel, ThirdPage } from '../components/Model/Index'

export default function Home() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <IndexModel
            className="colored"
            modelName="Model One"
            overlayNode={
              <DefaultOverlayContent
                label="Model One"
                description="Model 1"
              />
            }
          />

          <ModelSection
            className="colored"
            modelName="Model Two"
            overlayNode={
              <DefaultOverlayContent
                label="Model Two"
                description="Model 2"
              />
            }
          />

          <ThirdPage
            className="colored"
            modelName="Model Three"
            overlayNode={
              <DefaultOverlayContent
                label="Model Three"
                description="Model 3"
              />
            }
          />
        </div>
      </ModelsWrapper>
    </Container>
  )
}
