'use client'
import TypeIt from 'typeit-react'

const TypeItWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <TypeIt
      options={{
        speed: 150,
        loop: true,
        waitUntilVisible: true,
      }}
      getBeforeInit={(instance) => {
        instance.pause(800).delete(3).type("JJuhey").pause(2000)

        return instance;
      }}
    >{children}</TypeIt>
  )
}

export default TypeItWrapper
