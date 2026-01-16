import {
    Container,
    SimpleGrid,
    Card,
    Text,
    Button,
    Group,
    Badge,
    Image,
    Divider,
    Modal,
    List,
    ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import Header from "../../components/layout/Header";
import { plans } from "../../data/health";


const HealthCheckupPlans = () => {
    const [opened, setOpened] = useState(false);
    const [activePlan, setActivePlan] = useState<any>(null);

    const openDetails = (plan: any) => {
        setActivePlan(plan);
        setOpened(true);
    };

    return (
        <div className="min-h-screen bg-slate-300">
            <Header />

            <Container size="xl" py={60}>
                <h1 className="mb-12 text-center text-5xl font-bold text-gray-900">Health Checkup Plans</h1>
                <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="xl">
                    {plans.map((plan) => (
                        <Card
                            key={plan.id}
                            withBorder
                            radius="lg"
                            padding="lg"
                            className="transition-all hover:shadow-xl bg-white"
                        >
                            <Card.Section>
                                <Image
                                    src={plan.image}
                                    height={220}
                                    alt={plan.title}
                                    fallbackSrc="https://placehold.co/600x400?text=Health+Checkup"
                                />
                            </Card.Section>

                            <Text fw={700} size="xl" mt="md" c="blue.7">
                                {plan.title}
                            </Text>

                            <Group justify="space-between" mt="md">
                                <Text size="sm" c="dimmed">
                                    Price
                                </Text>

                                <Group gap={6}>
                                    <Text
                                        size="lg"
                                        fw={700}
                                        c="blue.7"
                                    >
                                        {plan.discountedPrice}
                                    </Text>
                                    <Text
                                        size="sm"
                                        c="gray"
                                        td="line-through"
                                    >
                                        {plan.originalPrice}
                                    </Text>
                                </Group>
                            </Group>


                            <Divider my="md" />

                            <Text size="sm" c="dimmed">
                                {plan.description}
                            </Text>

                            <Text size="sm" fw={600} mt="sm">
                                Test Parameters: {plan.parameters}
                            </Text>

                            <Badge mt="md" radius="xl" color="blue" variant="light">
                                {plan.idealFor}
                            </Badge>

                            <Group grow mt="lg">
                                <Button color="blue">Book Now</Button>
                                <Button
                                    variant="outline"
                                    color="blue"
                                    onClick={() => openDetails(plan)}
                                >
                                    View Details
                                </Button>
                            </Group>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>

            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title={activePlan?.title}
                size="xl"
                centered
            >

                {activePlan && (
                    <>
                        <Text fw={700} size="lg" c="blue.7" mb="sm">
                            Included Tests
                        </Text>

                        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xs">
                            {activePlan.tests.map((test: string, index: number) => (
                                <List
                                    key={index}
                                    spacing="xs"
                                    icon={
                                        <ThemeIcon color="orange" size={18} radius="xl">
                                            <IconCheck size={12} />
                                        </ThemeIcon>
                                    }
                                >
                                    <List.Item>{test}</List.Item>
                                </List>
                            ))}
                        </SimpleGrid>

                        <Divider my="lg" />

                        <Text fw={700} size="lg" c="blue.7" mb="sm">
                            Departments Covered
                        </Text>

                        <Group>
                            {activePlan.departments.map((dept: string, index: number) => (
                                <Badge
                                    key={index}
                                    variant="light"
                                    color="blue"
                                    radius="xl"
                                >
                                    {dept}
                                </Badge>
                            ))}
                        </Group>

                        <Group justify="flex-end" mt="xl">
                            <Button color="gray" onClick={() => setOpened(false)}>
                                Close
                            </Button>
                        </Group>
                    </>
                )}
            </Modal>
        </div>
    );
};

export default HealthCheckupPlans;
