import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-amber-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about visiting Wadi Rum and booking experiences with me.
          </p>
        </div>

        <Accordion type="single" collapsible className="mb-12">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the best time to visit Wadi Rum?</AccordionTrigger>
            <AccordionContent>
              <p>
                The best time to visit Wadi Rum is during spring (March to May) and autumn (September to November) when
                temperatures are moderate. Summer (June to August) can be extremely hot during the day, though nights
                are pleasant. Winter (December to February) offers mild daytime temperatures but can be very cold at
                night, sometimes dropping below freezing.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How do I get to Wadi Rum?</AccordionTrigger>
            <AccordionContent>
              <p>Wadi Rum is located about 60km east of Aqaba and 120km south of Petra. You can reach Wadi Rum by:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Taxi or private transfer from Aqaba (1 hour) or Petra (2 hours)</li>
                <li>Public minibus from Aqaba or Petra (less frequent)</li>
                <li>Rental car (good roads lead to Wadi Rum Village)</li>
              </ul>
              <p className="mt-2">
                I can also arrange transportation from nearby cities for an additional fee. Just mention this in your
                inquiry.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>What should I pack for Wadi Rum?</AccordionTrigger>
            <AccordionContent>
              <p>Essential items to pack include:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Comfortable walking shoes or hiking boots</li>
                <li>Sun protection (hat, sunglasses, sunscreen)</li>
                <li>Light, breathable clothing for daytime</li>
                <li>Warm layers for evenings (even in summer, desert nights can be cool)</li>
                <li>Water bottle (you can refill at camps)</li>
                <li>Camera</li>
                <li>Small backpack for day trips</li>
                <li>Headlamp or flashlight</li>
              </ul>
              <p className="mt-2">For overnight stays, all bedding is provided at the camps.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>How far in advance should I book?</AccordionTrigger>
            <AccordionContent>
              <p>
                For peak season (March-May and September-November), I recommend booking at least 2-3 weeks in advance.
                For other times, 1 week notice is usually sufficient. For large groups or special requests, earlier
                booking is recommended.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
            <AccordionContent>
              <p>
                I accept cash (Jordanian Dinars, US Dollars, and Euros) and bank transfers. Payment is typically
                collected upon arrival. For some experiences, a deposit may be required to secure your booking.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>What's your cancellation policy?</AccordionTrigger>
            <AccordionContent>
              <p>
                Free cancellation up to 48 hours before your experience. Cancellations within 48 hours may incur a 30%
                fee. No-shows will be charged the full amount. In case of extreme weather conditions that make
                activities unsafe, we'll offer alternative dates or a full refund.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>Is Wadi Rum safe?</AccordionTrigger>
            <AccordionContent>
              <p>
                Yes, Wadi Rum is very safe for tourists. Jordan in general is one of the safest countries in the Middle
                East. As a local guide, I ensure all activities are conducted safely, and I'm familiar with all areas of
                the desert. Basic precautions against sun exposure and dehydration are important.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Do I need a visa to visit Jordan?</AccordionTrigger>
            <AccordionContent>
              <p>
                Most nationalities need a visa to enter Jordan. Visas can be obtained upon arrival at Queen Alia
                International Airport in Amman or at the Aqaba border crossing. The Jordan Pass, which includes entry to
                Petra and other attractions, also covers your visa fee if you stay at least 3 nights in Jordan. I
                recommend checking the latest visa requirements for your nationality before traveling.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>Are there bathroom facilities in the desert camps?</AccordionTrigger>
            <AccordionContent>
              <p>
                Yes, all camps have bathroom facilities. The standard camps have shared bathrooms with toilets and
                sometimes showers. Luxury camps offer private bathrooms with hot water. For wild camping, basic
                facilities are set up, but they are more rustic.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger>Can you accommodate dietary restrictions?</AccordionTrigger>
            <AccordionContent>
              <p>
                Yes, I can accommodate vegetarian, vegan, gluten-free, and other dietary requirements with advance
                notice. Traditional Bedouin cuisine already includes many vegetarian options. Please mention any dietary
                restrictions when booking so I can make appropriate arrangements.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="text-center">
          <p className="mb-6">Don't see your question answered here? Feel free to contact me directly.</p>
          <Button className="bg-amber-700 hover:bg-amber-800">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

