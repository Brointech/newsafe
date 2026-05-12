// import {
//   Code,
//   CreditCard,
//   Landmark,
//   Wallet,
//   Headphones,
//   Receipt,
// } from "lucide-react";

// export default function Services() {
//   const services = [
//     {
//       title: "Open API Banking",
//       description:
//         "We provide developers access to core banking infrastructures.",
//       icon: <Code className="w-6 h-6 text-blue-600" />,
//     },
//     {
//       title: "Inter Bank Transfer",
//       description:
//         "With our app, you have every bank at your fingertips, swift and reliable.",
//       icon: <Landmark className="w-6 h-6 text-blue-600" />,
//     },
//     {
//       title: "Loans",
//       description:
//         "Your sector doesn't matter, we have the exact package you need. Flexible and easy to access.",
//       icon: <Wallet className="w-6 h-6 text-blue-600" />,
//     },
//     {
//       title: "Digital Banking",
//       description:
//         "We offer both personal and business accounts. Everything is digitized, no need for physical contact.",
//       icon: <Wallet className="w-6 h-6 text-blue-600" />,
//     },
//     {
//       title: "Payment Cards",
//       description:
//         "Safe Haven provides programmable cards to manage all your accounts with ease.",
//       icon: <CreditCard className="w-6 h-6 text-blue-600" />,
//     },
//     {
//       title: "Bill Payments",
//       description:
//         "No need to get stranded. Pay your bills online hitch-free using our banking app.",
//       icon: <Receipt className="w-6 h-6 text-blue-600" />,
//     },
//     {
//       title: "24 Hour Customer Service",
//       description:
//         "We are always on standby to provide solutions to all your challenges.",
//       icon: <Headphones className="w-6 h-6 text-blue-600" />,
//     },
//   ];

//   return (
//     <section className="bg-gray-50  px-2 sm:px-6 lg:px-30 py-12 lg:py-20">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-12 max-w-xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Our Services
//           </h2>
//           <p className="text-gray-500 text-lg">
//             We have quality solutions in place to <br /> make banking smooth.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300

//               ${
//                 // stagger effect (like your design)
//                 index === 1 || index === 4 ? "lg:mt-10" : ""
//               }
//               ${index === 2 || index === 6 ? "lg:mt-20" : ""}
//               `}
//             >
//               {/* Icon */}
//               <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
//                 {service.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-semibold text-blue-700 mb-2">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
