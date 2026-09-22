"use client"

import { useCallback, useEffect, useState } from "react"

import { cn } from "cn" // Change to "@/lib/utils" if your project uses standard shadcn paths
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

// Added a "title" property for each slide
const CUSTOM_SLIDES = [
  { id: 1, src: "/2025_networking/image1.jpg", alt: "Networking Event 1", title: "Welcome & Registration" },
  { id: 2, src: "/2025_networking/image2.jpg", alt: "Networking Event 2", title: "Keynote Address" },
  { id: 3, src: "/2025_networking/image3.jpg", alt: "Networking Event 3", title: "Panel Discussion" },
  { id: 4, src: "/2025_networking/image4.jpg", alt: "Networking Event 4", title: "Networking Mixer" },
  { id: 5, src: "/2025_networking/image5.jpg", alt: "Networking Event 5", title: "Closing Remarks" },
]

export function Pattern() {
  const [mainApi, setMainApi] = useState<CarouselApi>()
  const [thumbApi, setThumbApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbApi) return
      mainApi.scrollTo(index)
    },
    [mainApi, thumbApi]
  )

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return
    const index = mainApi.selectedScrollSnap()
    setSelectedIndex(index)
    thumbApi.scrollTo(index)
  }, [mainApi, thumbApi])

  useEffect(() => {
    if (!mainApi) return
    onSelect()
    mainApi.on("select", onSelect)
    mainApi.on("reInit", onSelect)
    return () => {
      mainApi.off("select", onSelect)
      mainApi.off("reInit", onSelect)
    }
  }, [mainApi, onSelect])

  return (
    <div className="w-full">
      <div className="group relative w-full overflow-hidden">
        {/* Main Carousel */}
        <Carousel setApi={setMainApi} className="w-full">
          <CarouselContent className="ml-0">
            {CUSTOM_SLIDES.map((slide) => (
              <CarouselItem key={slide.id} className="pl-0">
                <div className="bg-muted relative h-[75vh] w-full overflow-hidden">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="h-full w-full object-cover"
                  />
                  
                  {/* Small Textbox / Badge in the Top Corner */}
                  <div className="absolute top-6 left-6 z-10 rounded-lg bg-black/60 px-4 py-2 text-white backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300">
                    <p className="text-xs font-semibold tracking-wide uppercase sm:text-sm">
                      {slide.title}
                    </p>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Overlay Thumbnails Container */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 transition-opacity duration-300">
          <div className="relative mx-auto w-full max-w-3xl">
            <Carousel
              setApi={setThumbApi}
              opts={{
                containScroll: "keepSnaps",
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 flex-row">
                {CUSTOM_SLIDES.map((slide, index) => (
                  <CarouselItem
                    key={slide.id}
                    className="basis-1/4 cursor-pointer pl-2 sm:basis-1/6"
                    onClick={() => onThumbClick(index)}
                  >
                    <div
                      className={cn(
                        "relative aspect-video overflow-hidden rounded-md border-2 transition-all duration-300",
                        index === selectedIndex
                          ? "border-white opacity-100 ring-2 ring-black/20 scale-105"
                          : "border-white/40 opacity-50 hover:opacity-80"
                      )}
                    >
                      <img
                        src={slide.src}
                        alt={`Thumb ${slide.alt}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}