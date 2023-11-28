'use client'

import { Box, Text, useMedia } from '@gluestack-ui/themed'

export default function Home() {
  // set the height to be more than the screen height in order to see the scrollbar
  return (
    <main style={ { height: 3000 } }>
      <Boxes />
    </main>
  )
}

const Boxes = () => {
  const media = useMedia()

  return (
    <>
      <Box
        height={ 100 }
        bg="$backgroundDark500"
        justifyContent="center"
        alignItems="center"
        sx={ { '@xl': { visibility: 'visible', '@base': { visibility: 'hidden' } } } }
      >
        <Text size="3xl">CSS XL visible box</Text>
      </Box>

      { media.xl && (
        <Box
          height={ 100 }
          bg="$backgroundDark500"
          justifyContent="center"
          alignItems="center"
        >
          <Text size="3xl">JS XL visible box</Text>
        </Box>
      ) }
    </>
  )
}
