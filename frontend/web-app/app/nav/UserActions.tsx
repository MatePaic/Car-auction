'use client'

import { Button, Divider, FormControl, InputLabel, Link, MenuItem, Select } from "@mui/material";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from "react-icons/ai";
import { HiCog, HiUser } from "react-icons/hi";

type Props = {
    user: User
}

export default function UserActions({user}: Props) {
    const router = useRouter();

    return (
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="demo-simple-select-label">{`Welcome ${user.name}`}</InputLabel>
            <Select label={`Welcome ${user.name}`}>
                <MenuItem>
                    <HiUser />
                    <Link href='/'>
                        My Auctions
                    </Link>
                </MenuItem>
                <MenuItem>
                    <AiFillTrophy />
                    <Link href='/'>
                        Auctions won
                    </Link>
                </MenuItem>
                <MenuItem>
                    <AiFillCar />
                    <Link href='/'>
                        Sell my car
                    </Link>
                </MenuItem>
                <MenuItem>
                    <HiCog />
                    <Link href='/session'>
                        Session (dev only!)
                    </Link>
                </MenuItem>
                <Divider orientation="vertical" flexItem />
                <MenuItem onClick={() => signOut({callbackUrl: '/'})}>
                    <AiOutlineLogout />
                    <Link href='/session'>
                        Sign out
                    </Link>
                </MenuItem>
            </Select>
        </FormControl>
    )
}
