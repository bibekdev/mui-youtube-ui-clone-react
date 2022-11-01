import { Box, Tab, Tabs } from '@mui/material'
import { SyntheticEvent, useState } from 'react'
import { tabItems } from '../../data'

const TabList: React.FC = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event: SyntheticEvent, newValue: number) =>
    setValue(newValue)

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons='auto'
        aria-label='scrollable tabs'>
        {tabItems.map(tab => (
          <Tab key={tab.id} label={tab.text} />
        ))}
      </Tabs>
    </Box>
  )
}

export default TabList
