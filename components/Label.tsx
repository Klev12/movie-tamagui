import { Input, Label, Switch, XStack, YStack } from 'tamagui'

export function LabelDemo() {
  return (
    <YStack padding="$5" minWidth={300} space="$3" backgroundColor={'rgba(0,0,0,0.5)'} borderRadius={20}>
      <XStack alignItems="center" space="$4">
        <Label htmlFor="title" fontSize={16} width={90} color={'white'}>
          Title
        </Label>
        <Input id="title" defaultValue="" width={200} fontSize={16} flex={1} />
      </XStack>

      <XStack alignItems="center" space="$4">
        <Label htmlFor="time" fontSize={16} width={90}color={'white'}>
          Time
        </Label>
        <Input id="time" defaultValue="" width={100} fontSize={16} flex={1} />
      </XStack>

      <XStack alignItems="center" space="$4">
        <Label htmlFor="director" fontSize={16} width={90}color={'white'}>
          Director
        </Label>
        <Input id="director" defaultValue="" width={100} fontSize={16} flex={1} />
      </XStack>
    </YStack>
  )
}