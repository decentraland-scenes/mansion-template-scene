import {
  engine,
  Transform,
} from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { createCube } from './factory'

const uiComponent = () => (
 
      <Label
        value={`Test UI`}
        fontSize={18}
        uiTransform={{ width: '100%', height: 30 } }
      />
     
)


export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}