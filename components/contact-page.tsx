"use client";

import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { PhoneCall, Mail, MapPin, Terminal } from "lucide-react";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.any(),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          sender: values.email,
          subject: values.subject,
          message: values.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("Email sent successfully:", data);
    } catch (error: any) {
      console.error("Error sending email:", error.message || error);
    }
  };

  return (
    <div>
      <h1 className="m-auto text-3xl text-center font-bold tracking-tight">
        Contact Us
      </h1>
      <main className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-16 p-4">
        <div className="flex flex-col items-center m-auto md:items-start text-center md:text-left">
          <h2>Let's Get In Touch.</h2>
          <p className="mt-2">+91 9876543210</p>
          <p>abc@example.com</p>
          <p>Cuddalore, India</p>
        </div>

        {/* Form Section */}
        <div
          className="w-full max-w-md backdrop-blur-[16px] backdrop-saturate-[180%] 
          bg-primary/5 dark:bg-[rgba(17,25,40,0.75)] 
          rounded-[12px] border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.125)] p-4 shadow-xl"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="w-full flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Name" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Subject" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Message..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-2">
                <Button className="w-full">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
