import DefaultOverlayContent from '../components/DefaultOverlayContent';
import { Container } from './indexStyles';
import { ModelsWrapper, ModelSection } from '../components/Model'

export default function Home() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection
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

          <ModelSection
            className="colored"
            modelName="Model One"
            overlayNode={
              <DefaultOverlayContent
                label="Model One"
                description="Model 3"
              />
            }
          />
        </div>
      </ModelsWrapper>
    </Container>
  )
}
