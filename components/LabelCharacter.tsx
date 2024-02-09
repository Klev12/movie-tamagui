import { Input, Label, Switch, XStack, YStack } from 'tamagui'

export function LabelCharacter() {
  return (
    <YStack padding="$3" minWidth={300} space="$2"backgroundColor={'rgba(0,0,0,0.5)'} borderRadius={20}> 
      <XStack alignItems="center" space="$4">
        <Label width={90} htmlFor="description" fontSize={14} color={'white'}> 
          Description
        </Label>
        <Input flex={1} id="description" defaultValue="" width={200} fontSize={16} />
      </XStack>

      <XStack alignItems="center" space="$4">
        <Label width={90} htmlFor="cost" fontSize={14} color={'white'}>
          Cost
        </Label>
        <Input flex={1} id="cost" defaultValue="" width={100} fontSize={16} />
      </XStack>

      <XStack alignItems="center" space="$4">
        <Label width={90} htmlFor="stock" fontSize={14} color={'white'}> 
        Stock
        </Label>
        <Input flex={1} id="stock" defaultValue="" width={100} fontSize={16} />
      </XStack>
    </YStack>
  )
}
