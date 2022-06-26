/* eslint-disable react-hooks/exhaustive-deps*/
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, FC, useEffect } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: FC = memo(() => {
    const { getUsers, users, loading} = useAllUsers();

    useEffect(()=> getUsers(), []);
    return (
        <>
            {loading ? (
                <Center>
                    <Spinner/>
                </Center>
                ):(
                    <Wrap p={{base:4, md:10}}>
                        {users.map((user) => (
                            <WrapItem key={user.id} mx="auto">
                                <UserCard 
                                    imageUrl="https://source.unsplash.com/random"
                                    userName={user.username}
                                    fullName={user.name}
                                />
                            </WrapItem>
                        ))}
                    </Wrap>
                )}
        </>
    );
});