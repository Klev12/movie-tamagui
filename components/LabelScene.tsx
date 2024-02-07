import { Input, Label, Switch, XStack, YStack } from 'tamagui'

export function LabelScene() {
  return (
    <YStack padding="$3" minWidth={300} space="$2"> 
      <XStack alignItems="center" space="$4">
        <Label width={90} htmlFor="description" fontSize={14}> 
          Description
        </Label>
        <Input flex={1} id="description" defaultValue="" width={200} fontSize={16} />
      </XStack>

      <XStack alignItems="center" space="$4">
        <Label width={90} htmlFor="budget" fontSize={14}>
          Budget
        </Label>
        <Input flex={1} id="budget" defaultValue="" width={100} fontSize={16} />
      </XStack>

      <XStack alignItems="center" space="$4">
        <Label width={90} htmlFor="minutes" fontSize={14}> 
        Minutes
        </Label>
        <Input flex={1} id="minutes" defaultValue="" width={100} fontSize={16} />
      </XStack>
    </YStack>
  )
}
