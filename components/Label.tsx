import { Input, Label, Switch, XStack, YStack } from 'tamagui'

export function LabelDemo() {
  return (
    <YStack padding="$3" minWidth={300} space="$2"> 
      <XStack alignItems="center" space="$4">
        <Label width={90} htmlFor="tile" fontSize={14}> 
          Title
        </Label>
        <Input flex={1} id="tile" defaultValue="" width={200} fontSize={16} />
      </XStack>

      <XStack alignItems="center" space="$4">
        <Label width={90} htmlFor="time" fontSize={14}>
          Time
        </Label>
        <Input flex={1} id="time" defaultValue="" width={100} fontSize={16} />
      </XStack>

      <XStack alignItems="center" space="$4">
        <Label width={90} htmlFor="director" fontSize={14}> 
          Director
        </Label>
        <Input flex={1} id="director" defaultValue="" width={100} fontSize={16} />
      </XStack>
    </YStack>
  )
}
