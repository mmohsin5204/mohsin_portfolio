import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export const Education = () => {
  const events = [
    { id: '01', title: "Aptech Certified ADSE", location: "Aptech Computer Education, Pakistan", date: "2024 - Ongoing", desc: "Advanced Diploma in Software Engineering covering Web Dev, Database, and Programming." },
    { id: '02', title: "Bachelor of Commerce (B.COM)", location: "Allama Iqbal Open University", date: "2024 - Ongoing", desc: "Higher education focusing on business and commerce fundamentals." },
    { id: '03', title: "Intermediate (Commerce)", location: "Govt. Islamia Commerce College", date: "2021 - 2023", desc: "Pre-university education with a focus on commercial studies." },
    { id: '04', title: "Matriculation (Computer)", location: "QJ Public School", date: "2019 - 2020", desc: "Foundational education with a specialization in computer science." },
  ];

  return (
    <section id="education" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-brand-black mb-16">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-slate-50 rounded-2xl border border-brand-black/5 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-brand-accent font-mono text-xs font-bold">{event.id}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gray">{event.date}</span>
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-2">{event.title}</h3>
              <p className="text-brand-gray text-sm mb-4">{event.desc}</p>
              <div className="flex items-center gap-2 text-brand-gray text-[10px] font-bold uppercase tracking-widest">
                <MapPin size={12} /> {event.location}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
