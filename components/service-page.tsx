"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AditionalServices, ServiceProvides } from "@/data/constants";
import { Check } from "lucide-react";

export function ServicesPage() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive digital solutions tailored to your business needs
        </p>
      </section>

      {/* Main Services */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ServiceProvides.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <service.icon className="h-6 w-6 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-2xl font-bold">{service.price}</div>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      {/* Additional Services */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Additional Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {AditionalServices.map((service, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 rounded-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Contact us today to discuss your project requirements and how we can
          help you achieve your goals.
        </p>
        <Button size="lg" className="mt-4">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
