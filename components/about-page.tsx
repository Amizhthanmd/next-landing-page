import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Globe } from "lucide-react";

export function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Chen",
      role: "CTO & Technical Director",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Emma Williams",
      role: "Design Lead",
      image: "/placeholder.svg?height=400&width=400",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're a team of passionate individuals dedicated to creating
          exceptional digital experiences.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8">
        {[
          { icon: Users, label: "Clients", value: "200+" },
          { icon: Award, label: "Awards", value: "15" },
          { icon: Clock, label: "Years", value: "10+" },
          { icon: Globe, label: "Countries", value: "25+" },
        ].map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Team Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Innovation",
              description:
                "We constantly push boundaries and embrace new technologies.",
            },
            {
              title: "Quality",
              description:
                "We deliver excellence in every project we undertake.",
            },
            {
              title: "Integrity",
              description:
                "We maintain the highest standards of professional ethics.",
            },
            {
              title: "Collaboration",
              description:
                "We believe in the power of teamwork and partnership.",
            },
          ].map((value, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
