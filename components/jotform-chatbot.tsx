"use client"

import { useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    AgentInitializer: {
      init: (config: any) => void
    }
  }
}

export default function JotformChatbot() {
  useEffect(() => {
    // Initialize the chatbot after the script has loaded
    const initChatbot = () => {
      if (window.AgentInitializer) {
        window.AgentInitializer.init({
          agentRenderURL: "https://agent.jotform.com/0195b8765a2278e19946bde894c736b54c54",
          rootId: "JotformAgent-0195b8765a2278e19946bde894c736b54c54",
          formID: "0195b8765a2278e19946bde894c736b54c54",
          queryParams: ["skipWelcome=1", "maximizable=1"],
          domain: "https://www.jotform.com",
          isDraggable: false,
          background: "linear-gradient(180deg, #3A5800 0%, #3A5800 100%)",
          buttonBackgroundColor: "#004BB6",
          buttonIconColor: "#F8FEEC",
          variant: false,
          customizations: {
            greeting: "Yes",
            greetingMessage: "Hi! How can I assist you?",
            openByDefault: "No",
            pulse: "Yes",
            position: "right",
            autoOpenChatIn: "0",
          },
          isVoice: undefined,
        })
      }
    }

    // If the script has already loaded, initialize immediately
    if (document.readyState === "complete" && window.AgentInitializer) {
      initChatbot()
    }
  }, [])

  return (
    <>
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Initialize after the script loads
          if (window.AgentInitializer) {
            window.AgentInitializer.init({
              agentRenderURL: "https://agent.jotform.com/0195b8765a2278e19946bde894c736b54c54",
              rootId: "JotformAgent-0195b8765a2278e19946bde894c736b54c54",
              formID: "0195b8765a2278e19946bde894c736b54c54",
              queryParams: ["skipWelcome=1", "maximizable=1"],
              domain: "https://www.jotform.com",
              isDraggable: false,
              background: "linear-gradient(180deg, #3A5800 0%, #3A5800 100%)",
              buttonBackgroundColor: "#004BB6",
              buttonIconColor: "#F8FEEC",
              variant: false,
              customizations: {
                greeting: "Yes",
                greetingMessage: "Hi! How can I assist you?",
                openByDefault: "No",
                pulse: "Yes",
                position: "right",
                autoOpenChatIn: "0",
              },
              isVoice: undefined,
            })
          }
        }}
      />
      <div id="JotformAgent-0195b8765a2278e19946bde894c736b54c54"></div>
    </>
  )
}
